#!/usr/bin/env python3
"""Prepare lossless, uncompressed OOXML for c2patool 0.27.22's ZIP handler."""
import copy
import sys
import zipfile


def verify(source, destination):
    with zipfile.ZipFile(source) as original, zipfile.ZipFile(destination) as output:
        if len(output.namelist()) != len(set(output.namelist())):
            raise ValueError("Signed DOCX has duplicate ZIP entries")
        for name in original.namelist():
            if original.read(name) != output.read(name):
                raise ValueError(f"Document part changed: {name}")


def prepare(source, destination):
    with zipfile.ZipFile(source) as original:
        names = original.namelist()
        if len(names) != len(set(names)):
            raise ValueError("DOCX has duplicate ZIP entries")
        if "word/document.xml" not in names or "[Content_Types].xml" not in names:
            raise ValueError("File is not a Word OOXML document")
        if any(name.lower().startswith("_xmlsignatures/") for name in names):
            raise ValueError("Office-signed documents require separate signature-preservation review")
        with zipfile.ZipFile(destination, "w", compression=zipfile.ZIP_STORED) as output:
            output.comment = original.comment
            for entry in original.infolist():
                stored = copy.copy(entry)
                stored.compress_type = zipfile.ZIP_STORED
                output.writestr(stored, original.read(entry))
        with zipfile.ZipFile(destination) as output:
            for name in names:
                if original.read(name) != output.read(name):
                    raise ValueError(f"Document part changed: {name}")


if __name__ == "__main__":
    if sys.argv[1] == "--verify":
        verify(*sys.argv[2:])
    else:
        prepare(*sys.argv[1:])
