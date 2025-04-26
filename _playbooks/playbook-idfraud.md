---
layout: page
collection: playbooks
title:  Identity Fraud Detection Playbook
permalink: /playbooks/idfraud/
description: This playbook serves as a resource and provides a foundational understanding of identity fraud techniques, detection methods, and mitigation strategies.
sidenav: playbooks
sticky_sidenav: true

pubdate: February 2025
version: 1.0

subnav:
  - text: Acknowledgments
    href: '#acknowledgments'
  - text: Executive Summary
    href: '#executive-summary'
  - text: Purpose
    href: '#purpose'
  - text: Scope
    href: '#scope'
  - text: Key Terms
    href: '#key-terms'
  - text: Audience
    href: '#audience'
  - text: Disclaimer
    href: '#disclaimer'   
  - text: Identity Fraud 101
    href: '#identity-fraud-101'
  - text: Effects of Identity Fraud
    href: '#effects-of-identity-fraud'
  - text: Fraud Detection Capabilities
    href: '#fraud-detection-capabilities'
  - text: Identity Fraud Detection Steps
    href: '#identity-fraud-detection-steps'
  - text: Conclusion
    href: '#conclusion'
  - text: Appendix A. Policies, Standards, and Guidance
    href: '#appendix-a---policies-standards-and-guidance'
  - text: Appendix B. Outside References
    href: '#appendix-b---outside-references'
  - text: Appendix C. Overview of GAO’s A Framework for Managing Fraud Risks in Federal Programs
    href: '#appendix-c---overview-of-gaos-a-framework-for-managing-fraud-risks-in-federal-programs'
  - text: Appendix D. Acronyms
    href: '#appendix-d---acronyms'

---

<style>
/* Style for figcaptions below images */
.gsa-figcaption {
  padding: 10px;
  font-size: 10pt;
  font-style: oblique;
  font-weight: bold;
}
</style>

This playbook is a collaboration between the Federal Chief Information Security Officer Council Identity, Credential, and Access Management Subcommittee and the Digital Identity Community of Practice, and the DOD DARPA SemaFor Program team. For additional context and to request a conversation or demo of the tools mentioned within this document please contact [icam@gsa.gov](mailto:icam@gsa.gov){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

<br/>

<div class="usa-accordion usa-accordion--bordered">
  <h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="v-a1">
      Date: {{page.pubdate}} - Version: {{page.version}}
    </button>
  </h4>
  <div id="v-a1" class="usa-accordion__content usa-prose">
    <table>
      <caption>Identity Fraud Detection Playbook version table</caption>
      <thead>
      <tr>
        <th scope='col'>Version Number</th>
        <th scope='col'>Author</th>
        <th scope='col'>Date</th>
        <th scope='col'>Change/Updates</th>
      </tr>
      </thead>
      <tr>
        <th scope='row'>1.0</th>
        <td>OGP Identity Assurance and Trust Access Division</td>
        <td>February 2025</td>
        <td>Developed template and completed the document.</td>
      </tr>
    </table>
  </div>
</div>

## Acknowledgments 

This playbook was developed by GSA’s Office of Technology Policy’s Identity and Trusted Access Division. Technical contributions pertaining to media forensics were made by the members of the Defense Advanced Research Projects Agency Semantic Forensics (SemaFor) program team. OGP IATAD appreciates the collaboration and ongoing support from DARPA on this effort and looks forward to jointly collaborating on other high impact engagements as opportunities arise.

## Executive Summary

In today's increasingly digital world, federal agencies face a growing threat of identity fraud. Sophisticated actors continually develop new tactics to exploit vulnerabilities and compromise sensitive information. This playbook serves as a resource and provides a foundational understanding of identity fraud techniques, detection methods, and mitigation strategies. By establishing a common terminology and framework, this guide empowers agencies to:

- Recognize the diverse landscape of identity fraud techniques. 
- Detect suspicious activities and potential threats.
- Implement effective mitigation strategies to protect sensitive data and systems.
- Foster cross-agency collaboration and information sharing to combat identity fraud collectively.

This playbook will delve into the intricacies of identity fraud and equip federal agencies with the knowledge and tools necessary to safeguard their operations.

**Figure 1: Identity Fraud Detection Overview**

![Figure 1: Identity Fraud Detection Overview]({{site.baseurl}}/assets/experiments/idfraud/figure1-identity-fraud-detection-overview.jpg)


## Purpose

This playbook provides Federal Identity, Credential, and Access Management program managers with the knowledge and tools needed to combat identity fraud. It provides clear definitions of key fraud terminology to establish a common understanding to be used as a baseline for effective communication and cross-agency collaboration. The playbook offers insights by listing identity fraud techniques, use cases, and scenarios which explain how criminals exploit vulnerabilities and compromise information.  It provides effective fraud detection and mitigation strategies to help identify and prevent fraudulent activities. Additionally, this playbook provides guidance on assessing an agency's unique risks and tailoring its approach accordingly. Finally, it supports setting objectives and aligning fraud prevention programs with federal policy.


## Scope

The scope of this playbook covers critical fraud detection techniques such as deepfake and forgery detection techniques for government agency use. While this playbook provides a comprehensive overview of identity fraud, it does not delve into specific technical implementations or vendor-specific solutions. The focus remains on equipping agencies with the foundational knowledge and strategic guidance necessary to develop effective fraud prevention programs.

## Key Terms

These are key terms used throughout this document:

- [Behavioral Biometrics](https://www.biometricsinstitute.org/physiological-and-behavioural-biometrics/#:~:text=A%20behavioural%20biometric%20system%20measures,profile%20or%20is%20an%20imposter){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Behavioral biometrics establish identity by monitoring the distinctive characteristics of movements, gestures, and motor-skills of individuals as they perform a task or series of tasks.
- [Biometrics](https://csrc.nist.gov/glossary/term/biometrics){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Unique biological markers (e.g., fingerprints, facial patterns) used for identity verification.
- [Blockchain](https://csrc.nist.gov/glossary/term/blockchain){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A distributed ledger technology used for secure and immutable credential verification.
- [Credential Stuffing](https://owasp.org/www-community/attacks/Credential_stuffing){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Credential stuffing is the automated injection of stolen username and password pairs (“credentials”) into website login forms, in order to fraudulently gain access to user accounts.
- [Deepfake](https://www.gao.gov/assets/gao-20-379sp.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A deepfake is a video, photo, or audio recording that seems real but has been manipulated with AI.
- [Digital Content Forgery](https://www.dhs.gov/sites/default/files/2023-06/23_0630_st_digital_forgeries_report_signed.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Digital content forgery technologies enable adversaries to create or manipulate digital audio, visual, or textual content, to distort information, undermine security and authority, and ultimately erode trust in each other and in our government.
- [Facial Recognition](https://www.dhs.gov/publication/facial-recognition-technology){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Facial recognition technology is a contemporary security solution that automatically identifies and verifies the identity of an individual from a digital image or video frame. This technology can be compared to other biometric technologies, and used for a number of activities.
- [FISMA](https://csrc.nist.gov/glossary/term/fisma){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A U.S. law requiring federal agencies to protect information and information systems.
- [Generative Adversarial Networks](https://www.nist.gov/publications/generative-adversarial-network-performance-low-dimensional-settings){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}  - A generative adversarial network is an artificial neural network with a distinctive training architecture, designed to create examples that faithfully reproduce a target distribution. 
- [Hardening](https://csrc.nist.gov/glossary/term/hardening){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - A process intended to eliminate a means of attack by patching vulnerabilities and turning off nonessential services.
- [Spoofing](https://csrc.nist.gov/glossary/term/spoofing){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The deliberate inducement of a user or resource to take incorrect action. Note: Impersonating, masquerading, piggybacking, and mimicking are forms of spoofing
- [Iris Recognition](https://ucr.fbi.gov/fingerprints_biometrics/biometric-center-of-excellence/files/iris-recognition.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Iris recognition is the process of recognizing a person by analyzing the random pattern of the iris. 
- [NIST Standards](https://csrc.nist.gov/glossary/term/nist_standards){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Guidelines set by the National Institute of Standards and Technology for cybersecurity and identity verification.
- [Phishing](https://csrc.nist.gov/glossary/term/phishing){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - The act of tricking individuals into disclosing sensitive personal information through deceptive computer-based means.
- [Social Engineering](https://csrc.nist.gov/glossary/term/social_engineering){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - An attempt to trick someone into revealing information (e.g., a password) that can be used to attack systems or networks.
- [Synthetic Media](https://www.techuk.org/resource/synthetic-media-what-are-they-and-how-are-techuk-members-taking-steps-to-tackle-misinformation-and-fraud.html){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} - Synthetic Media is an all encompassing term to describe any type of content whether video, image, text or voice that has been partially or fully generated using artificial intelligence or machine learning.

## Audience

The primary audience for this playbook are agency digital identity and security program managers. Table 1 lists stakeholders and stakeholder types digital identity program managers engage with during identity fraud prevention, detection and mitigation. An internal stakeholder is within the agency and external stakeholders are outside the agency.


<table class="usa-table">
<caption>Table 1: Stakeholder Table</caption>
<thead>
  <tr>
    <th scope="col" id="stakeholder">Stakeholder</th>
    <th scope="col" id="stakeholder-type">Stakeholder Type</th>
  </tr>
</thead>
<tbody>
<tr>
  <th scope="row" headers="stakeholder">Digital Identity and Security Program Managers</th>
  <td headers="stakeholder-type">Internal</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">Security Operations</th>
  <td headers="stakeholder-type">Internal</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">IT / System Administrators</th>
  <td headers="stakeholder-type">Internal</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">Human Resources</th>
  <td headers="stakeholder-type">Internal</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">Users</th>
  <td headers="stakeholder-type">Internal/External</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">Third-Party Assessors</th>
  <td headers="stakeholder-type">External</td>
</tr>
<tr>
  <th scope="row" headers="stakeholder">Law Enforcement Agencies</th>
  <td headers="stakeholder-type">External</td>
</tr>
</tbody>
</table>


## Disclaimer

This playbook was developed by the General Services Administration Office of Government-wide Policy with input from federal IT practitioners. This document shouldn’t be interpreted as official policy or mandated action, and doesn’t provide authoritative definitions for IT terms. Instead, this playbook supplements existing federal IT policies and builds upon the [Office of Management and Budget Memorandum 19-17 (OMB M-19-17), Enabling Mission Delivery through Improved Identity, Credential, and Access Management](https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}, as well as existing federal identity guidance and playbooks. Privileged user access (e.g., superusers, domain administrators) is out of scope for this playbook.

## Identity Fraud 101 

### What is it?

*“The impact of identity theft on the government sector reaches far and wide, costing Americans tens of billions of dollars every year”* *<sub>__(LexisNexis, 2016, pg.9)__<sup>[^1]</sup></sub>*.

Identity fraud in the federal government happens when someone uses a stolen identity or a fake identity to gain access to a government system. This type of fraud has evolved with time and has grown increasingly sophisticated. Awareness of different identity fraud techniques will help agency fraud prevention, encourage compliance with federal policies, and promote unified interagency approach.

### Key Types of Identity Fraud Techniques

This section of the playbook highlights a few key fraud techniques, methods, and their impact when exploited for perspective and does not intend to be all inclusive.

**Identity Fraud**

- **Synthetic Identity Fraud** - The creation of false identities using a mix of real and fabricated information. It often involves combining real data, such as a real social security number, with fake information, like a fictitious name or date of birth.
- **Identity Theft** - The use of stolen personal information to impersonate another individual. This can lead to unauthorized transactions or activities being conducted in the victim's name.

**Types of Identity Fraud Techniques**

- **Social Engineering** - Psychological manipulation of people into performing actions or divulging confidential information. Often involves tricking people into breaking normal security procedures.
- **Phishing** - Fraudulent attempts to obtain sensitive information such as usernames, passwords, and credit card details by disguising oneself as a trustworthy entity in electronic communications.
  - **Email Phishing** - The most common form of phishing, where attackers send emails that appear to be from reputable sources. These emails often contain malicious links or attachments designed to steal personal information or install malware.
  - **Spear Phishing** - A more targeted form of phishing where attackers customize their attack to a specific individual or organization. The emails used in spear phishing attacks are highly personalized and often contain information relevant to the target to make the deceit more convincing.
  - **Whaling** - A form of spear phishing aimed at high-profile targets within a company, such as executives or decision-makers. Whaling attacks often involve attempts to steal sensitive data or execute fraudulent transactions. The emails are usually crafted to look like important or official communications.
  - **SMS Smishing** - Phishing conducted through SMS messages. Victims receive text messages that appear to be from reputable sources, often asking them to follow a link or call a phone number to resolve a fake issue like a compromised bank account or unpaid bill.
  - **Vishing (Voice Phishing)** - Involves phone calls instead of electronic communication. Attackers use spoofed caller IDs and pretend to be from trusted organizations like banks or tech support to trick victims into providing personal or financial information.
- **Deepfake Technology** - AI-based manipulation of audio, video, and images to create realistic but false representations of reality. Contemporary technologies enable realistic fabrications that can be used for various fraudulent activities.
  - **Audio Deepfake** - Audio deepfakes use advanced AI algorithms to create a synthetic replica of a person's voice. This technology can convincingly mimic a person's speech patterns, intonation, and cadence after being trained on recordings of that person's voice.
  - **Video Deepfake** -  Video deepfakes are alterations of a person’s appearance in a video to make it seem as though they are saying or doing something they never did. This process often uses sophisticated AI models, such as GANs, to achieve realistic results.
  - **Visual Deepfake** - Visual deepfakes use AI to create or alter images, often by swapping faces, morphing features, or generating entirely new images of non-existent people. GANs are a common method for generating and manipulating images with a high level of realism.
- **Enabling Tech** - AI and machine learning models for generating deepfakes.
- **Credential Stuffing** - Using stolen or leaked credentials from one system (typically usernames and passwords) to access others. This threat is based on the common reuse of passwords across multiple accounts.
  - **Account Takeover** - Illicit access and control of another person's account, which can result in unauthorized transactions or activities.
- **Forgery Techniques** - Advanced document and credential falsification, including altering or counterfeiting government documents such as passports, driver's licenses, or diplomas.
- **Data Aggregation and Data Breaches** - Unlawful access to sensitive data through breaches which can be used for various fraudulent activities including identity theft, synthetic identity fraud, and credential stuffing.

**Combinations of Identity Fraud Techniques**

In today's interconnected digital world, identity fraud has become increasingly intricate, exploiting advanced technologies and social engineering tactics. Fraudsters often blend multiple techniques to create sophisticated and highly effective fraud schemes, significantly enhancing their ability to deceive victims and evade detection. By understanding the synergy between these various methods, we can better equip ourselves against such multifaceted identity fraud attacks. The following are some examples of damaging combinations of identity fraud techniques.

- **Email Phishing with Credential Stuffing**
  - **Mechanism** - Attackers initiate a phishing campaign by sending deceptive emails that prompt victims to reveal their login credentials. The obtained credentials are then used in credential stuffing attacks to access additional systems where the same usernames and passwords have been reused.
  - **Impact** - This combination can compromise multiple accounts, leading to unauthorized transactions, data breaches, and further exploitation of the user's digital footprint across various platforms.
- **Spear Phishing with Forgery Techniques**
  - **Mechanism** - Fraudsters conduct in-depth research on a specific individual or organization to send highly personalized phishing emails. They bolster their credibility by using forged documents, such as fake invoices or official-looking correspondence, to convince the target to provide sensitive information or authorize fraudulent activities.
  - **Impact** - The success rate of spear phishing increases significantly when paired with forgery techniques, resulting in considerable financial and reputational damage to the targeted entities.
- **Whaling with Deepfake Technology**
  - **Mechanism** - High-profile individuals such as executives are targeted using whaling techniques combined with deepfake technology. Fraudsters create realistic deepfake videos or audio messages impersonating trusted colleagues or partners, persuading these high-level targets to disclose sensitive information or approve significant financial transactions.
  - **Impact** - The convincing nature of the deepfakes, coupled with the high stakes involved in whaling attacks, can lead to substantial financial losses and breaches of highly sensitive corporate data.
- **SMS Phishing with Social Engineering**
  - **Mechanism** - Attackers use smishing to send deceptive SMS messages that appear to be from reputable sources, often claiming an urgent issue like a compromised bank account. They then employ social engineering tactics, such as creating a sense of urgency or fear, to manipulate victims into clicking on malicious links or calling phone numbers to provide personal information.
  - **Impact** - The combination of smishing and social engineering can effectively pressure victims into acting quickly and irrationally, leading to the rapid disclosure of sensitive information and unauthorized financial transactions.
- **Vishing (Voice Phishing) with Audio Deepfake Technology**
  - **Mechanism** - Fraudsters use audio deepfake technology to replicate the voice of a trusted individual, such as a company executive or a bank representative. They then make vishing calls using spoofed caller IDs, convincing the target to share confidential information or authorize fraudulent activities.
  - **Impact** - The use of deepfake audio adds realism to vishing attacks and increases their success rate dramatically, making it more likely for victims to fall for the scam and divulge critical information.

## Effects of Identity Fraud

- **Fraud Technique** -  Forgery -  Document and Credential Falsification
  - **Scalability**
    - Digital Tools - The use of sophisticated software tools enables forgers to create highly accurate counterfeit documents. This includes advanced image editing software for precision alteration of document features like holograms, watermarks, and microprints.
    - **Printing Technology** - High-resolution printers and specialized printing techniques allow the production of near-identical replicas of official documents.
    - **Distributed Networks** - The proliferation of underground online marketplaces and distribution networks facilitates the wide dissemination and sale of forged documents globally.
    - **Machine Learning Models** - Emerging utilization of machine learning allows algorithms to replicate security features and anti-counterfeiting measures more effectively.
    - **Easier Access and Collaboration** - Increased online tutorials, forums, and dark web collaborations provide forgers with the knowledge and resources to enhance their techniques quickly.
- **Potential Impact**
    - Unauthorized access to secured locations and systems by exploiting counterfeit credentials, posing significant security risks to institutions and critical infrastructure.
    - Creation of false identities allowing criminals to engage in illegal activities, such as financial fraud, without being easily traced.
    - Erosion of trust in official documents and institutions, as widespread falsification questions the authenticity of legitimate credentials.
    - Illegal border crossings and bypassing of immigration controls using forged passports and visas, undermining national security.
    - Individuals obtaining employment, educational opportunities, or professional licenses using fake diplomas, certifications, or professional credentials, potentially leading to unqualified personnel in crucial roles.
    - Opening bank accounts, taking loans, or conducting financial transactions under false pretenses, resulting in substantial monetary losses for institutions and individuals.
    - Misuse of falsified documents to obtain sensitive or dangerous materials, such as pharmaceuticals, firearms, or hazardous chemicals.
- **Fraud Technique: Deepfake (synthetic media)**
  - **Scalability**
    - Image: Image generators are improving, becoming more customizable with better control and are easier to use. 
    - Audio: Improved fidelity of voice generation with less source material required; increasingly refined controls of auditory/vocal qualities, such as environment, accent, gender, emotion, etc.
    - Video: Longer-lasting and more photorealistic text-guided video generation & editing; more natural audio-driven deep fake video; full body video generation & reenactment
  - **Potential Impact**
    - Gaining access to critical resources by cloning senior executives or decision makers’ voices or video.
    - Information manipulation at scale, exploiting a public figure’s reputation for mass effect.
    - Election Interference.
    - Individual targeting by an online account appearing to be that of a popular or public figure.
    - Potentially irreversible reputational and financial damage.
    - Generation of non-consensual explicit content.

## Fraud Detection Capabilities

### Introduction

The use cases below exhibit sample media forensic workflows drawn from DARPA’s Semantic Forensics (SemaFor) program capabilities, including analytics for image, voice and video identity fraud detection. SemaFor technologies are utilized here to illustrate elements of an exemplar workflow, for which an increasing marketplace of academic and industry products exist. This section provides a discussion of potential requirements of such a technical workflow in government fraud detection goals.

### The Technology Platform

Recent industry and academic efforts have created multiple families of technologies designed to help mitigate online threats perpetuated via synthetic and manipulated media. These technologies include algorithms that can detect, attribute, and characterize manipulated or synthesized media multi-modal media assets (e.g., text, audio, image, video). Models like ChatGPT, DALL-E, and Midjourney are all recent tools that enable the automated generation of content, and the widespread adoption of such technologies has resulted in an explosion of AI-generated multimedia that makes it challenging to understand the provenance and authenticity of online material. Additionally, media generation and manipulation technologies are advancing rapidly, and traditional detection techniques that rely on a file’s statistical fingerprints are insufficient for detecting modern manipulated media. 

The workflow below illustrates a suite of analytics leveraged to detect, attribute, and localize manipulations in media through the identification of artifacts and inconsistencies, with the goal of providing an informative, probabilistic assessment of file manipulation. 

**Scenario 1 - Image**

A digital photograph file, of individual, individual’s location,  or documents such as a passport, are submitted electronically for purposes of identification or verification of identity or location or association with another individual (this image may be potentially morphed, generated or modified).

**Analyst Task - Determine if presented image is generated or manipulated; localize the manipulation if present**

Algorithms, such as those displayed in the DARPA SemaFor program prototype user interface depicted below, analyze the image and provide a finding of “Likely Manipulated,” along with detailed information to assist the analyst in making a judgement on a particular piece of media, in this case a generated image. 

**Figure 2 - Image**

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure2-image.jpg" alt="Results for an image analytic on a single generated image, displaying high confidence by the Detection Score that the image is synthetically generated. A detailed description of the analytic utility is highlighted above. This image required only a few seconds to process, but the runtime required varies based on factors such as analysis hardware capabilities, number of images and number of analytics run per batch.">
  <figcaption class="gsa-figcaption">Results for an image analytic on a single generated image, displaying high confidence by the Detection Score that the image is synthetically generated. A detailed description of the analytic utility is highlighted above. This image required only a few seconds to process, but the runtime required varies based on factors such as analysis hardware capabilities, number of images and number of analytics run per batch.</figcaption>
</figure>

**Scenario 2 - Audio**

Analyst is presented with a recorded audio clip, such as a voicemail on a unified communications system. The speaker asserts identity or verification of an identity (this file may be a potential impersonation). 

**Analyst Task: Determine if voice/audio is generated or audio manipulated; localize the manipulation if present**

The workflow selects analytics appropriate to the type of file submitted for analysis; most of the analytics are designed to analyze specific media types, or to look for features of the media that are specific to a particular type of modification or generative model. In the collection of files below, the audio files are identified as having manipulations detected.

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure3-audio.jpg" alt="The Collections page of the user interface, showing the analyst’s individual collections of media.">
  <figcaption class="gsa-figcaption">The Collections page of the user interface, showing the analyst’s individual collections of media.</figcaption>
</figure>

**Figure 4 - Audio**

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure4-audio.jpg" alt="Multiple algorithms analyze the audio and provide findings of generated audio, along with detailed information to assist the analyst in making an assessment. In the file-level findings illustrated above, the audio file is identified as manipulated by several analytics. The audio pattern in red indicates the portion of the audio identified as manipulated in the analysis.">Multiple algorithms analyze the audio and provide findings of generated audio, along with detailed information to assist the analyst in making an assessment. In the file-level findings illustrated above, the audio file is identified as manipulated by several analytics. The audio pattern in red indicates the portion of the audio identified as manipulated in the analysis.</figcaption>
</figure>


**Scenario 3 - Video**

A short video file is submitted electronically for purposes of identification or verification of identity or location or association with another individual (either video or audio track potentially manipulated or generated). 

**Analyst Task: Determine if video or voice/audio track is generated or manipulated; localize the manipulation if present.**

Analytics process both the audio track and video tracks for semantic consistency. 

**Figure 5: Video**

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure5-video.jpg" alt="Workflow output, with the higher analytic score on the right of the image, indicates this video is probably manipulated. This video is identified as a deepfake with an analytic runtime of approximately two minutes.">Workflow output, with the higher analytic score on the right of the image, indicates this video is probably manipulated. This video is identified as a deepfake with an analytic runtime of approximately two minutes.</figcaption>
</figure>

**Deepfake Scenario Impacts for Image, Audio, Video**

Deepfake technologies may be utilized to perpetrate different types of harm depending on the media modality and victim type, including:

- Targeting public or corporate figures’ voices or videos.
- Information manipulation at scale, targeting individual or organizational reputation.
- Social engineering in an attempt to gain access or resources.
- Individual targeting for exploitation or extortion.
- Non-consensual explicit content.
- Advanced image morphing (use of an image by one or more individuals) for impersonation.

This portion of the document has provided a walkthrough of sample detection, attribution, and characterization techniques that may be orchestrated to protect against malicious manipulated and synthetic media. Analytics such as these may inform fraud detection practices, as described in the following section.

## Identity Fraud Detection Steps

 The Identity Fraud Detection Steps framework provides a comprehensive guide for agencies to establish resilient infrastructures, precisely detect fraudulent activities, and mitigate their impact effectively. This process encompasses preparation, swift action, thorough investigation, recovery, and transparent reporting, ensuring robust protection of sensitive information and maintenance of public trust. By integrating advanced technological tools and fostering a collaborative environment, agencies can enhance their defenses against identity fraud and emerging threats like deepfakes.

**Figure 6: Identity Fraud Detection Steps**

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure6-identity-fraud-destection-steps.jpg" alt="This graphic is inspired by the GAO Fraud Framework and provides example timelines for implementing each step of the Identity Fraud Detection process.">
  <figcaption class="gsa-figcaption">This graphic is inspired by the GAO Fraud Framework and provides example timelines for implementing each step of the Identity Fraud Detection process.</figcaption>
</figure>

### Step 0 - Establishing a Resilient Infrastructure

Before identity fraud incidents, including deepfake-related attacks, ever occur, it is critical for government agencies to proactively establish and maintain a resilient infrastructure. This preparatory phase ensures that the agency is well-positioned to detect, respond, and recover from security incidents swiftly and effectively. Building a resilient infrastructure involves comprehensive planning, implementation of security best practices, ongoing training, and continuous improvement of security measures. 

Key initiatives in this phase include:

**System Hardening**

- Minimize attack surfaces by disabling unnecessary services, closing unused ports, and removing non-essential software.
- Regularly update and patch systems to protect against known vulnerabilities.
- Implement strict access controls and privilege management to ensure that employees have only the access necessary for their roles.

**Robust Identity Verification and Access Management**

- Adopt multi-factor authentication to add extra layers of security beyond simple password protection.
- Use advanced identity verification techniques, including biometrics, to authenticate users more securely.
- Regularly audit and review access permissions to ensure they align with current roles and needs.

**Comprehensive Security Training and Awareness**

- Train employees to recognize and report suspicious activities, including potential deepfakes and other social engineering attacks.
- Conduct regular drills and simulations to prepare staff for various types of security incidents.
- Provide up-to-date information on the latest threats and security practices.

**Advanced Detection Systems**

- Implement continuous monitoring tools and advanced analytics to detect abnormal behavior or unauthorized access in real-time.
- Use machine learning algorithms to identify patterns indicative of fraud or identity theft.
- Incorporate deepfake detection tools to analyze video and audio for signs of manipulation.

**Incident Response Planning**

- Develop and maintain a comprehensive Incident Response Plan that outlines steps to take during a security breach.
- Ensure that the IRP includes procedures for handling deepfake threats and other emerging technologies.
- Conduct periodic reviews and updates of the IRP to incorporate new insights and evolving threats.

**Collaboration and Information Sharing**

- Foster a culture of collaboration between departments, ensuring that information about potential threats and security incidents is shared promptly.
- Engage in information-sharing initiatives with other government agencies and private sector organizations to stay informed about new threats and best practices.

By establishing a resilient infrastructure, government agencies can significantly reduce the risk of identity fraud and ensure that they are prepared to handle incidents efficiently. This foundational step lays the groundwork for effective detection, mitigation, recovery, and reporting of security breaches, maintaining public trust, and safeguarding sensitive information.

### Step 1 - Detection of Identity Fraud

**Methods of Detection**

Detecting identity fraud within government agencies involves implementing comprehensive surveillance and monitoring techniques to identify unusual or unauthorized activities. This includes analyzing system access logs for anomalies, utilizing advanced analytics and machine learning tools to detect patterns indicative of fraud, and employing strong multi-factor authentication mechanisms to verify identities. The growing threat of deepfakes, means that government agencies should also incorporate deepfake detection tools that analyze video and audio for inconsistencies that may indicate manipulation. Establishing internal hotlines for reporting suspicious activities and regularly auditing identity management systems to ensure compliance with security protocols are also crucial steps. 

Hardening processes also play a significant role in detection, which may include:

- Training staff to recognize potential deepfake content and report it promptly.
- System hardening to reduce attack surfaces, such as disabling unnecessary services and ports.
- Regular patch management to ensure that all systems are protected against known vulnerabilities.
- Implementing strict access controls and privilege management to limit the potential for unauthorized access.

### Step 2 - Mitigation of Identity Fraud

**Methods of Mitigation**

Upon detecting identity fraud, including incidents involving deepfakes, government agencies must take immediate and decisive actions to mitigate its impact. Key steps include immediately revoking access to compromised accounts, contacting relevant authorities and internal security teams, and notifying potentially affected individuals or departments. Agencies should deploy incident response teams to perform a comprehensive analysis of the breach and implement temporary measures such as suspending system components involved in the fraud. To further mitigate the impact, hardening processes must be enhanced, including:

- Enforcing strong password policies, such as requiring complex passwords and regular changes.
- Enhancing verification processes and employing biometric authentication where possible.
- Implementing AI-driven tools specifically designed to detect deepfake content.
- Conducting regular security training for employees to ensure they are aware of the latest security practices, including the risks posed by deepfakes.

**Mitigation by Phase Structure**

**Figure 7 - Mitigation by Phase Structure**

<figure>
  <img src="{{site.baseurl}}/assets/experiments/idfraud/figure7-mitigation-by-phase-structure.jpg" alt="This graphic is inspired by the GAO Fraud Framework and provides example timelines for implementing each step of the Identity Fraud Detection process.">
  <figcaption class="gsa-figcaption">This graphic is inspired by the GAO Fraud Framework and provides example timelines for implementing each step of the Identity Fraud Detection process.</figcaption>
</figure>

**Immediate Response** - Agencies should quickly disable affected accounts and access points to prevent further fraudulent activities, as well as notify internal and external stakeholders, including cybersecurity teams and law enforcement, to begin an urgent response. Additionally, agencies should apply system hardening techniques such as network segmentation to isolate compromised systems, and deploy immediate countermeasures against deepfake threats, such as using real-time video authentication tools.

**Timeframe - 24-72 hours**

- Disable Affected Accounts and Access Points: Immediately upon detection, preferably within the first 24 hours.
- Notify Internal and External Stakeholders: Within the first 24 hours, ensuring communication with cybersecurity teams, law enforcement, and affected individuals.
- System Hardening (Network Segmentation and Countermeasures): Deploy immediate measures within 48-72 hours. Utilize real-time video authentication tools to counter deepfakes rapidly.

**Investigation** - Agencies should conduct a thorough and swift investigation to determine the extent and source of the identity fraud, with special attention paid to identifying deepfake usage. This phase involves gathering forensic evidence, interviewing involved personnel, and identifying vulnerabilities exploited during the fraud. Agencies should also implement hardening measures identified during the investigation to prevent similar attacks in the future.

**Timeframe - 1-2 weeks**

- Conduct a Thorough Investigation: Begin as soon as the immediate response actions are underway. A detailed investigation should be completed within 7-14 days.
- Gathering Forensic Evidence and Interviewing Personnel: First 3-5 days.
- Identifying Vulnerabilities and Deepfake Analysis: Conducted concurrently, should be completed within 7-10 days.
- Implement Immediate Hardening Measures: As vulnerabilities are identified, begin implementing measures within the 1-2 week investigation period to prevent further exploitation.

**Long-term Protection** - Agencies should Implement comprehensive security upgrades based on the findings of the investigation. This includes updating identity verification processes, enhancing cybersecurity measures, conducting regular system hardening, and continuously monitoring systems for potential threats such as deepfakes. Agencies should also develop and refine an Incident Response Plan to prepare for future incidents, incorporating deepfake detection and prevention strategies.

**Timeframe - 1-3 months for ongoing activities**

- Comprehensive Security Upgrades
  - Updating Identity Verification Processes: Develop and implement within the first month.
  - Enhancing Cybersecurity Measures: Ongoing, with major upgrades implemented within 1-2 months.
- Regular System Hardening and Continuous Monitoring
  - Initial Enhancements: Within the first month, followed by continuous monitoring and periodic reviews every 3-6 months.
- Incident Response Plan Development
  - Initial Development: Within the first month post-incident.
  - Full Implementation and Regular Drills: Plan finalized and operational within 1-2 months, with regular drills conducted at least quarterly.
- Deepfake Detection and Prevention Strategies
  - Deployment of Tools and Training: Initial deployment within 1 month, ongoing improvements as technology evolves.

### Step 3 - Recovery From Identity Fraud

Recovering from identity fraud within government agencies is a detailed process that focuses on restoring trust and securing sensitive information. It is critical to document all instances of fraud, including those involving deepfakes, and provide comprehensive reports to relevant authorities and impacted parties. Agencies should review and correct any inaccuracies in their records, reissue identification credentials as needed, and ensure that all compromised systems are secured and tested before resuming full operations. Continuous implementation of system hardening throughout the recovery phase, including regular security assessments and penetration testing, helps identify and address new vulnerabilities. Engagement with forensic experts and cybersecurity professionals during this phase will help to develop more resilient security frameworks. Leverage knowledge from the incident, including insights on deepfake threats, to bolster defenses and enhance the agency's overall security posture.

### Step 4 - Reporting Identity Fraud

Reporting identity fraud in government agencies requires a structured approach to ensure transparency and accountability. Agencies should promptly report incidents to federal authorities, such as the Office of Inspector General and the Cybersecurity and Infrastructure Security Agency, to facilitate a coordinated response. It is essential to notify internal oversight bodies and provide detailed reports to senior government officials and relevant committees, particularly highlighting any use of deepfake technology in the fraud. Transparency with the public and stakeholders is paramount; issuing public statements and updates about the steps being taken to address and mitigate fraud, including measures against deepfakes, can help maintain public trust. Documenting the incident and response efforts, including the hardening processes implemented, can contribute to a repository of knowledge that aids in refining policies and improving future security measures.

By incorporating awareness and defenses against deepfake threats into these structured steps, government agencies can significantly enhance their ability to detect, mitigate, recover from, and report identity fraud, thereby safeguarding sensitive information and maintaining public trust.

**Reporting Deepfakes**

There are multiple ways victims can report deepfake attacks. Victims of deepfakes could:

- Contact law enforcement officials who could possibly help victims by conducting forensic investigations using police reports and evidence gathered from victims.
- Contact the Federal Bureau of Investigations and report incidents to local FBI offices or the FBI’s 24/7 Cyber Watch at [CyWatch@fbi.gov](mailto:cyWatch@fbi.gov).
- Utilize the Securities and Exchange Commission’s services to investigate financial crimes.
- Report inappropriate content and abuse on social media platforms (i.e. Facebook, Twitter, Instagram, etc.) using the platforms’ reporting procedures.
- If a victim is under 18 years of age, incidents can be reported to the National Center for Missing and Exploited Children via their cyber tip line at [https://report.cybertip.org](https://report.cybertip.org){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}.

**Available Resources**

According to Bobby Chesney and Danielle Citron authors of Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security, victims may find it challenging taking the civil liability route if overwhelming evidence is unavailable, and even if a malign actor is identified, it may be impossible to use civil remedies if the malign actor is outside of the United States or in a jurisdiction where local legal action is unsuccessful. However, there are several resources available for victims of online abuse that could possibly support them in other ways. Organizations that are dedicated to helping victims include but are not limited to:

- [Cyber Civil Rights Initiative](https://cybercivilrights.org/contact-us/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is an organization that provides a 24-hour crisis helpline, attorney referrals, and guides for removing images from social media platforms and other websites.
- [EndTab](https://www.endtab.org/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is an organization that provides victims, including universities, law enforcement, nonprofits, judicial systems, healthcare networks, with resources for education and reporting abuse.
- [The National Suicide Prevention Lifeline](https://988lifeline.org/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a national network of local crisis centers that provides free and confidential emotional support for people in distress.
- [Cybersmile](https://www.cybersmile.org/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a non-profit anti-bullying organization that provides expert support for victims of cyberbullying and online hate campaigns.
- [Identitytheft.gov](http://identitytheft.gov){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is the federal government’s one-stop resource for identity theft victims.
- [Withoutmyconsent.org](https://withoutmyconsent.org/resources/something-can-be-done-guide/evidence-preservation/){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} is a non-profit organization that provides guides for preserving evidence that could be used in a civil suit.
- [Google’s Help Center](https://support.google.com/websearch/answer/9116649?hl=en&ref_topic=9173608){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"} a resource available via Google that enables victims to remove explicit fake imagery from Google searches.

  
## Conclusion

This playbook is a comprehensive guide for agencies to have a common understanding of emerging identity fraud detection techniques such as deepfakes and forgery. This playbook covers preventing, detecting and managing identity fraud techniques effectively. 

## Appendix A - Policies, Standards, and Guidance

### Federal Policies

- [Federal Register: Improving the Nation's Cybersecurity](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [OMB Memo 22-09 - Moving the U.S. Government Toward Zero Trust Cybersecurity Principles](https://zerotrust.cyber.gov/downloads/M-22-09%20Federal%20Zero%20Trust%20Strategy.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government Standards

- [Digital Identity Guidelines](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

### Government Guidance

- [Increasing Threat of DeepFake Identities](https://www.dhs.gov/sites/default/files/publications/increasing_threats_of_deepfake_identities_0.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [Increasing Threats of Deepfake Identities – Phase 2: Mitigation Measures](https://www.dhs.gov/sites/default/files/2022-10/AEP%20DeepFake%20PHASE2%20FINAL%20corrected20221006.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}

## Appendix B - Outside References

- [GAO Framework for Managing Fraud Risk in Federal Programs](https://www.gao.gov/assets/gao-15-593sp.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [The Identity Fraud Prevention Playbook](https://risk.lexisnexis.com/cross-industry-fraud-files/risk/downloads/assets/id-fraud-prevention-playbook.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}
- [SemaFor: Semantic Forensics](https://www.darpa.mil/research/programs/semantic-forensics){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}


## Appendix C - Overview of GAO’s A Framework for Managing Fraud Risks in Federal Programs

### Identity Fraud Prevention Techniques

- Identity Proofing
- Data Sharing and Matching
- Training and Awareness

### Critical Identity Fraud Techniques

- Deepfake (video, audio, picture (face morphing, writing)
- Forgery techniques (altered, falsified, counterfeit) 

### Detection Techniques

- Transaction Monitoring
- Analytics and Modeling
- Redflags and Alerts

### Response and Recovery

- Incident Response Plan
- Customer Support

### Continuous Improvement

- Metrics Evaluation
- Adapt to Threat Landscape

## Appendix D - Acronyms

<table class="usa-table">
<caption>Appendix D - Acronyms</caption>
<thead>
  <tr>
    <th scope="col" id="acronym">Acronym</th>
    <th scope="col" id="definition">Definition</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row" headers="acronym">CISA</th>
    <td scope="row" headers="definition">Cybersecurity and Infrastructure Security Agency</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">DARPA</th>
    <td scope="row" headers="definition">Defense Advanced Research Projects Agency</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">FBI</th>
    <td scope="row" headers="definition">Federal Bureau of Investigation</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">FISMA</th>
    <td scope="row" headers="definition">Federal Information Security Management Act</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">GAN</th>
    <td scope="row" headers="definition">Generative Adversarial Network</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">GAO</th>
    <td scope="row" headers="definition">Government Accountability Office</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">GSA</th>
    <td scope="row" headers="definition">General Services Agency</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">ICAM</th>
    <td scope="row" headers="definition">Identity, Credential, and Access Management</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">IRP</th>
    <td scope="row" headers="definition">Incident Response Planning</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">NIST</th>
    <td scope="row" headers="definition">National Institute of Standards and Technology</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">OGP</th>
    <td scope="row" headers="definition">Office of Government-wide Policy</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">OIG</th>
    <td scope="row" headers="definition">Office of Inspector General</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">OMB</th>
    <td scope="row" headers="definition">Office of Management and Budget</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">SemaFor</th>
    <td scope="row" headers="definition">Semantic Forensics</td>
  </tr>
  <tr>
    <th scope="row" headers="acronym">SMS</th>
    <td scope="row" headers="definition">Short Message Service</td>
  </tr>
</tbody>
</table>
<!-- Footnote Markdown section -->
[^1]: LexisNexis, 2016 The Identity Fraud Prevention Playbook, [https://risk.lexisnexis.com/cross-industry-fraud-files/risk/downloads/assets/id-fraud-prevention-playbook.pdf](https://risk.lexisnexis.com/cross-industry-fraud-files/risk/downloads/assets/id-fraud-prevention-playbook.pdf){:rel="noopener noreferrer"}{:class="usa-link usa-link--external"}