# Knowledge Base Backup
**Date:** 2026-03-05  
**Locale:** en-us
**Section ID(s):** {'id': 43637481302676, 'url': 'https://impiricussupport.zendesk.com/api/v2/help_center/en-us/sections/43637481302676.json', 'html_url': 'https://impiricussupport.zendesk.com/hc/en-us/sections/43637481302676-SOPs', 'category_id': 42501595948948, 'position': 0, 'sorting': 'manual', 'created_at': '2025-11-23T01:49:42Z', 'updated_at': '2026-02-03T19:45:37Z', 'name': 'SOPs', 'description': 'All SOP documents for CSRs and HCP Coordinators to reference', 'locale': 'en-us', 'source_locale': 'en-us', 'outdated': False, 'parent_section_id': None, 'theme_template': 'section_page'}, {'id': 43602948692116, 'url': 'https://impiricussupport.zendesk.com/api/v2/help_center/en-us/sections/43602948692116.json', 'html_url': 'https://impiricussupport.zendesk.com/hc/en-us/sections/43602948692116-Reference-Documents', 'category_id': 42501595948948, 'position': 0, 'sorting': 'manual', 'created_at': '2025-11-21T20:22:06Z', 'updated_at': '2026-03-03T15:17:32Z', 'name': 'Reference Documents', 'description': 'Concierge Representative SOPs and Reference Documents', 'locale': 'en-us', 'source_locale': 'en-us', 'outdated': False, 'parent_section_id': None, 'theme_template': 'section_page'}, {'id': 42501669744276, 'url': 'https://impiricussupport.zendesk.com/api/v2/help_center/en-us/sections/42501669744276.json', 'html_url': 'https://impiricussupport.zendesk.com/hc/en-us/sections/42501669744276-Product-Guide', 'category_id': 42501595948948, 'position': 0, 'sorting': 'manual', 'created_at': '2025-10-22T17:43:17Z', 'updated_at': '2026-03-05T14:59:52Z', 'name': 'Product Guide', 'description': 'Guide for Agents to reference what samples/reps have been successful and the methodology', 'locale': 'en-us', 'source_locale': 'en-us', 'outdated': False, 'parent_section_id': None, 'theme_template': 'section_page'}
---

## SOPs

### SOP - MSL Request

*Article ID: 45948756714004*

## Purpose

Provide a standardized process for managing inbound HCP requests to be contacted by a product Medical Science Liaison (MSL) to ensure efficient communication, professional representation, and high HCP satisfaction.

## Scope

Applies to Concierge Team Members handling MSL requests received via Slack/DocUpdate app and managed in Zendesk.

## Roles & Systems

### Roles

  * Concierge Team Member (Owner)
  * HCP Coordinator (Escalation)



### Systems

  * Slack/DocUpdate (Inbound requests)
  * Zendesk (Ticket management & HCP Communication)
  * Product Guide (MSL contact info & product alternatives)
  * Macros (Message templates housed within Zendesk)



## High-Level Workflow

  1. Receive request & ticket housed in Zendesk
  2. Send initial HCP acknowledgement (“send text” checkbox)
  3. Contact manufacturer Medical Information line/portal
  4. Update HCP and log internal progress in Tracker Ticket
  5. Follow-up & escalate as required
  6. Confirm MSL contact & close request



## Detailed Procedure

### 1\. Intake & Ticket Setup

The ticket is created & assigned to you in Zendesk. Immediately populate the **Zendesk user fields** to ensure accurate future communication:

  * Name & Credentials (MD, DO, NP, PA, etc.)
  * NPI & License Number
  * Specialty
  * Practice Name & Address
  * Phone & Fax numbers



Zendesk ticket structure:

  * **Conversation ticket:** All HCP-facing communication (Public replies/SMS enabled)
  * **Tracker ticket:** Internal notes including call recordings and progress summaries (Internal notes only)



### 2\. Initial HCP Outreach

  1. Open the assigned inbound ticket **within 24 hours** of creation.
  2. Switch reply type to **Public Reply**
  3. Apply approved greeting macro (or custom message)
     * Correct info as needed (Confirm credentials and drug name).
     * Reference the Request
     * Set expectations for next steps or updates
  4. Check **Send Text**.
  5. Review message
  6. Submit as **Responded**

⚠️ When the HCP replies, Zendesk creates a new **Conversation Ticket** linked to your Tracker Ticket.

**New ticket** = Conversation Ticket

**Original ticket** = Tracker Ticket (internal notes only)




### 3\. Manufacturer Contact (MSL Request)

Within **24 hours** of the initial acknowledgement:

  1. **Contact Medical Information:** Reach out to the manufacturer’s medical info line (phone, live chat, or email).
  2. **Place the request:** Use the HCP’s details to request that the MSL contact the HCP via their preferred method.
  3. **If no Medical Line exists:** Call or email general customer support lines to request a rep visit. Templates can be found in Macros.
  4. Update HCP in Conversation Ticket and submit Conversation Ticket as **Awaiting Response**
  5. Log actions in Tracker Ticket(s) as necessary (internal note)
  6. Submit Tracker Ticket as **In Progress**



### Important Guidelines

  * **Contact Info:** Always use your **individual Quo line** and **Concierge email**.
  * **Identity:** If asked about your relationship to the practice, state you are an assistant helping facilitate the request.
  * **Address Security:** Confirm all practice address information with the HCP before finalized requests.



### 4\. Tracker Ticket Updates

Log every:

  * Form submission/screenshot
  * Manufacturer email or call recording
  * Relevant LinkedIn outreach details
  * Daily progress notes ⚠️ **Update Tracker Tickets daily** with internal notes to ensure no HCP falls through the cracks.



### Escalation Rules

  * If no manufacturer response after **3 days** of initial outreach: Escalate to **HCP Coordinators**.
  * Partner with Coordinators to reach out to 3-5 local reps via LinkedIn if standard channels fail.



### 5\. Ongoing Follow-Up

  * Follow up with the manufacturer/MSL every **5-7 days** until the visit or contact is confirmed.
  * Continue weekly HCP updates (minimum every **5 business days**).



### 6\. Resolution & Closure

**Submit as Awaiting Confirmation when:**

  * The manufacturer confirms an MSL is assigned/visiting.
  * _Proactive Step:_ Offer to help coordinate a specific day/time for the visit.



**Submit as Resolved when:**

  * HCP confirms the MSL has made contact or visited the office.



**Submit as Done when:**

  * MSL is unavailable or the manufacturer refuses the request. As possible, offer:
    1. A virtual MSL meeting.
    2. Request a non-local rep.
    3. MSL for a similar product from the **Product Guide**.
  * HCP stopped responding for 7 days (after 2+ follow-up attempts




**For information on appropriate status type see**[**Ticket Statuses**](https://impiricussupport.zendesk.com/hc/en-us/articles/43603894842388-Ticket-Statuses)**.**

## 

## Appendix A: Methods to Request MSL Contact

**1\. Medical Information Line (Preferred)**

  * Usually found on the manufacturer's "Healthcare Professional" portal.
  * Requires HCP NPI and specific medical inquiry details.



**2\. Customer Support/Rep Portals**

  * Use for general "Request a Rep" forms if a specific MSL line isn't available.



**3\. LinkedIn Outreach (Escalation Only)**

  * Coordinate with Nick/Lauren to message 3-5 reps.
  * Priority is given to reps local to the HCP's practice address.

---

### SOP - MSL Requestv1 Jan 2026

*Article ID: 43637836268436*

## **Purpose**

This SOP aims to provide a standardized process to ensure HCP satisfaction through efficient communication and the satisfactory resolution of HCP requests to be contacted by a product Medical Science Liaison. 

## **Application**

This document details procedures for Concierge Team Members and the HCP Coordinator to properly respond to HCP requests to get in contact with a product MSL. 

## **Procedure Steps**

  1. **Populate the Zendesk user fields.**



This should include:

  * Name & Credentials (MD, DO, NP, PA, etc. - so that we are referring to them appropriately in all future communications)..
  * Phone number
  * NPI
  * Specialty
  * Practice Name
  * Practice Address
  * Any other information gathered during the request (i.e., fax number, practice name & address, license number, etc.)  
  



  2. **Send an introductory text message to the requesting HCP within 24 hours of the time the ticket was created.**

In the bottom left of the screen, you can select the relevant **macro** message - "_Default message_ "

Correct the information as needed in the macro. You will be prompted to confirm the message again before sending to the user.   


Send a text: With “Send Text” checked in left-hand window, change "Internal Notes" at the top of your text box to "Public Reply" or "SMS". Your message will send as a text once you press “Submit as ____” in the bottom right and confirm by pressing the "Send" button in the pop-up that appears

  
Internal Notes: These serve as notations on a ticket that the HCP will not see. This is where we will house any notes on progress made and any outside communication that is relevant to the ticket. Screenshots of manufacturer / rep emails, links to forms filled out, etc.  
  
  
_Submit as**Responded** to set the ticket status correctly, so we know we have responded to the initial request_  
  


  3. **Contact the drug manufacturer within the following 24 hours of sending the introductory text exchange or receiving the HCP request. **



More information to know:  
_Any address information should be confirmed with the HCP before ordering/requesting/sending out the sample. Once any necessary info is gathered, it should be included in the_ _user fields on Zendesk_ _so it can be easily accessed for any future requests._

_**IMPORTANT** : When giving HCP details during the sample request process, please use __your Quo number and DocUpdate email.__This way, we can best manage the process and the HCP isn’t having to dedicate their own time to the request._

**PROCESS FOR REQUESTING MSL:**

  * Contact the product/manufacturer's medical information line (can be via phone number, live chat, or email). Using the HCP’s information, request that the product MSL gets in touch with the HCP (via HCPs preferred contact method). 
  * Once a request has been submitted with the manufacturer, update the HCP that the MSL has been requested and should be in contact with them soon.
  * If no website options: call or email any available customer support lines requesting a rep visit to the location on the HCP's behalf. 
    * A template for this email/call info can be found in [message templates.](https://impiricussupport.zendesk.com/hc/en-us/articles/43636560449172-Message-Templates)
  * If none of the above options are available, or none of the methods result in open lines of communication within 3 days of starting contact measures, work with Nick and Lauren to reach out to 3-5 reps associated with the manufacturer via LinkedIn. (Make locals to the HCP a priority)

  
_Update the ticket with**Internal Notes** for every form you submit, manufacturer communication you receive (email, phone call), or anything other relevant communication _  
  
  
 _Once you have reached out to the product manufacturer, change the ticket’s Status by leaving an internal note and “Submit as**In Progress** ” on the ticket in Zendesk_  
  


  * If, after an additional 3 days, there has still been no response, escalate to Nick and Lauren.   
  
  
 _Once you have reached out to the product manufacturer, change the ticket’s Status by leaving an internal note and “Submit as**In Progress** ” on the ticket in Zendesk_  
  
  
 _Update the ticket each day with**internal notes**. This way we are looking at every ticket every day and not letting any HCPs fall through the cracks._  
  
  



  4. **Follow up every 5-7 days** with the manufacturer/MSL until they have visited the HCP  

     * If the ticket requires constant escalation or follow-up with the manufacturer,__ continue to follow up or escalate every 5-7 days  

     * (This can be tedious, but as long as you are consistent with following up - eventually someone will come through with the samples or some type of resolution)  

     * Continue updating the HCP every 5 days (once a week) at minimum  
  

  5. **Once we have confirmation that the MSL is going to make contact with / vist the HCP** , update the HCP and let them know they should expect the rep to visit soon, and******Submit as “Awaiting Confirmation”**  
  

     * We can also offer to help coordinate a day and time for the MSL to visit with the HCP  
  

  6. **Once there is confirmation from the HCP that the rep has visited,****Submit as “Solved” in Zendesk****.**  
  




_If, during the process, you determine that an MSL is not available or they continue not to be sent to the office location:_

  * Continue following up with the manufacturer every 5-7 business days until an MSL visits the office location.
  * Request from the manufacturer that a non-local rep get in touch.
  * Opt for a virtual MSL meeting, if applicable.
  * Offer an MSL for a similar product from the[ Product Guide ](https://impiricussupport.zendesk.com/hc/en-us/sections/42501669744276-Product-Guide)\- any that are suggested should be used to treat the same condition or fall within the HCP’s specialty.



For all options, keep the HCP up to date with any changes.

---

### SOP - Non-Request / General Message

*Article ID: 43637803300116*

## **Purpose**

This SOP aims to provide a standardized process to ensure HCP satisfaction through professional communication while delivering the proper introduction of DocUpdate Concierge service options. 

## **Application**

This document details procedures for Concierge Team Members and the HCP coordinator to properly respond to non-request messages received via the Concierge inbound channel.

## **Procedure Steps**

 _The original request is received via the concierge inbound channel, and a ticket is created in Zendesk for the request. Once the request is in, the person it is assigned to will:_

  1. **Input the Zendesk user fields.**



While many fields should be populated automatically at ticket creation, fill in any missing information as appropriate. This should include:

  * Name & Credentials (MD, DO, NP, PA, etc. - so that we are referring to them appropriately in all future communications).
  * Phone number
  * NPI
  * Specialty
  * Practice Name
  * Practice Address
  * License Number
  * Notes: Any other information gathered during the request (i.e., fax number, additional practice name & address, etc.)  
  



  2. **Send an introductory text message to the requesting HCP within 24 hours of the time the ticket was created.**



In the bottom left of the screen, you can select the **macro** message - "_Greeting explaining the Concierge service_ "

Correct the information as needed in the macro. You will be prompted to confirm the message again before sending to the user. 

Send a text:

  * **Tracker Tickets:** With “Send Text” checked in left-hand window, change "Internal Notes" at the top of your text box to "Public Reply". Your message will send as a text once you press “Submit as ____” in the bottom right and confirm by pressing the "Send" button in the pop-up that appears
  * **CONVERSATION Tickets:** change "Internal Notes" at the top of your text box to "SMS". Your message will send as a text once you press “Submit as ____” in the bottom right and confirm by pressing the "Send" button in the pop-up that appears  



  1. **If the HCP responds:**
     * With a rep or sample request
       * Flag in the channel, HCP Coordinator will update the ticket title OR create a new ticket for the item and you can follow the associated SOP
     * Wanting suggestions
       * Use the **Knowledge Base** to **recommend** 2-3 items that are relevant to their specialty area & practice. If there are none listed related to their practice area, search for popular products, available provider samples, or use chatgpt for product suggestions, but clarify with the HCP that “we will look into these product samples” and do not say that we can get them definitively. Always check with the HCP that they want you to look into whatever products you find (ask them first!)
       * If they say that they will hold off on samples for now, let them know to reach back out if they need anything, send the survey link, and close the ticket by **Submiting as “Done” in Zendesk**
       * If they make a request based on your suggestions, flag in the channel for an updated ticket title or a new ticket for the item and follow the associated SOP for the item.   




**4\. If the HCP does not respond:**

Follow up the next day, asking if there is anything they want you to get started for them. If they still don’t respond the next day, you can send an inactivity message and **Submit as “Done” in Zendesk**

---

### SOP - Sample or Rep Request

*Article ID: 43637543387284*

**Purpose**

Provide a standardized process for managing inbound HCP requests for pharmaceutical drug and medical practice samples to ensure timely communication, compliance, and high HCP satisfaction. 

**Scope**

Applies to Concierge Team Members handling sample requests received via Slack/DocUpdate app and managed in Zendesk. 

**Roles & Systems**

Roles

  * Concierge Team Member (Owner)
  * HCP Coordinator (Escalation)



Systems

  * Slack/DocUpdate (Inbound requests)
  * Zendesk (Ticket management & HCP Communication)
  * Knowledge Base (Product guide for familiar portals, processes, & availability)
  * Macros (Message templates housed within Zendesk)



**High-Level Workflow**

  1. Receive request & ticket housed in Zendesk
  2. Send initial HCP acknowledgement (“send text” checkbox)
  3. Check the Knowledge Base for the verified process
  4. Research & contact manufacturer (if needed)
  5. Follow-up & escalate as required
  6. Confirm delivery & close request



**Detailed Procedure**

  1. **Intake & Ticket Setup**


  * The ticket is created & assigned to you in Zendesk
  * Appears under your **unsolved tickets**



Zendesk ticket structure

  * **Conversation ticket:** All HCP-facing communication following the initial acknowledgement message (public replies enabled)
  * **Tracker ticket** : Ticket updates including call recordings, website screenshots, and progress summaries (internal notes only)


  2. **Initial HCP Outreach**



1\. Open the assigned inbound ticket

2\. Switch reply type to **Public Reply**

3\. Apply approved greeting macro (or custom message)

  * Reference the request
  * Set expectations for next steps or updates



4\. Check **Send Text**

5\. Review message

6\. Submit as **Responded**

**⚠️** When the HCP replies, Zendesk creates a **new ticket** that will be assigned to you.

  * New ticket = Conversation Ticket
  * Original ticket = Tracker Ticket (internal notes only)


  3. **Knowledge Base Review**



Search the Knowledge Base for a verified sample request process

If process exists:

  * Follow documented steps 
  * If KB steps appear incorrect, alert **#concierge-call-center** channel and proceed to research.



After initiating the request:

  * Update HCP in Conversation Ticket and submit Conversation Ticket as **Awaiting Response**
  * Log actions in Tracker Ticket(s) as necessary (internal note)
  * Submit Tracker Ticket as **In Progress**


  4. **Research & Manufacturer Contact (If NO Verified Process)**


  * Begin researching the product.
  * AI tools may be used as a starting point
    * All information must be verified before sending to an HCP
    * Links should not include an AI source



Within 24 hours of the initial acknowledgement message to HCP:

  * Contact manufacturer via preferred method (see Appendix A)
  * Update HCP once contact is made or new information is available



Important Guidelines

  * Confirm all HCP address information before submitting requests
  * Store verified details in Zendesk user fields
  * Always use: (unless HCP requested otherwise)
    * Concierge email
    * Your individual Quo line



Tracker Ticket Updates

  * Log every: 
    * Form submission
    * Manufacturer email or call
    * Relevant communication (rep emails, phone numbers, manufacturer phone numbers used, etc)
  * Submit Tracker Tickets as **In Progress** after manufacturer outreach 


  5. **Escalation Rules**


  * If no manufacturer/rep communication after **3 days** :
    * Escalate to **HCP Coordinators**
  * Update Tracker Ticket **daily** with internal notes


  6. **Ongoing Follow-Up**


  * Follow up with the manufacturer/rep every **5-7** days until resolution
    * If the ticket has been escalated 3x without resolution, flag to HCP Coordinators to determine if outreach should be ended. 
  * Continue weekly HCP updates (minimum every 5 business days)


  7. **Shipment Confirmation**



If shipment or delivery is confirmed:

  * Notify HCP with shipping details or expectations
  * Submit ticket as Awaiting Confirmation


  8. **Resolution & Closure**



**Submit as Resolved** when:

  * HCP confirms samples were delivered



**Submit as Done** when:

  * Samples were not available, or the HCP was ineligible to receive them
    * As possible, offer one or more of the following:
      * Rep office visit visit
      * Similar products from the Knowledge Base (should treat the same condition or align with the HCPs specialty area)
  * Tracking shows delivered, but we did not receive confirmation from the HCP
  * HCP stopped responding for 7 days, or after 2 or more follow-up attempts were made



For information on appropriate status type see [Ticket Statuses](https://impiricussupport.zendesk.com/hc/en-us/articles/43603894842388-Ticket-Statuses). 

* * *

**Appendix A: Methods to Request & Order Samples**

  1. ### **Manufacturer Sample Website (Preferred)**




May require:

  * HCP Name
  * NPI
  * Credentials
  * Specialty
  * Practice Name
  * Practice Address (verify via independent search; no home addresses)



**If Portal Account Is Required:**

  * Send HCP the portal link
  * Offer support if issues arise



  2. ### **Alternative Methods**



  * Submit a rep request or general inquiry via the manufacturer's website
  * Call or email customer support if no web option exists
    * State clearly that the Concierge is acting on behalf of the HCP/practice
    * If asked about your direct relationship to the HCP/practice, you can say you’re assisting them with the request or that you are an assistant



  3. ### **No Communication After 3 Days**



  * Partner with HCP Coordinators

---


## Reference Documents

### Updating an NPI number

*Article ID: 46249733489684*

We may have an HCP who is requesting samples or a rep visit from us who has an NPI number that still lists them as a " Student in an Organized Health Care Education/Training Program" on national registries. The HCP may need to update this information in order to proceed.

To update this information, an HCP can create an account or log in to <https://nppes.cms.hhs.gov/> and edit their profile.

Please note there may be a delay from when they submit their updates to when those updates are reflected in the registry

---

### Knowledge Base Search Tips and Keywords

*Article ID: 46058847873684*

### **The Golden Rule: Search using 1 word**

Zendesk’s search engine breaks multiple words into separate searches. To best find what we are looking for, use a 1-word search!

### **Search Helper (User Ask vs. Your Search)**

**If the User Asks For...** | **SEARCH (Keywords)**  
---|---  
**"Weight loss" / "GLP-1s"** |  GLP , Weight , Obesity  
**"Women's Health"** |  OBGYN , Gynecology  
**"Breathing issues"** |  Inhaler, Asthma , COPD  
**"Skin / Beauty / Aesthetics”** |  Cosmetic , Skincare , Sunscreen  
**"General / Primary Care"** |  Internal Medicine, Primary Care (**SUGGESTIONS BY SPECIALTY article**)  
**"Is this free?", “What is the cost?”** | Cost

---

### Updating the HCP

*Article ID: 43731679548820*

The HCP should be given a status update anytime there is a relevant update to the status of the request, which can include:

  * The rep/sample order has been placed with the manufacturer
  * if samples need to be delivered by rep visit
  * Rep contacted us that they will visit or reach out 
  * Samples have shipped
  * If it has been 5-7 days without contact from the manufacturer, let the HCP know that we have not heard back from them but are reaching out again and will continue to update them once we have any more information

---

### User fields to include in HCP contact

*Article ID: 43731623943828*

### What to include in the user fields

This info only needs to be added if we gathered it from the HCP. We only need to collect information required for the request

 _(For example, if we know that the HCP will use a portal to place the request, we do not need to collect information from the HCP)._

  * NPI
  * Confirmed Practice Name & Address
  * Credentials (MD, DO, PA, NP, PharmD)
  * License # (& state of licensure)
  * Fax number

---

### What phone number and email to use during requests

*Article ID: 43731541736980*

### What phone number and email to use during requests

  * All communication directly with **HCPs** should be handled using the **Concierge Primary** phone line.
  * As much as possible, use your own [docupdate.io](http://docupdate.io) email address when giving contact information during requests.
  * When **speaking with a manufacturer** , please use your **own OpenPhone/Quo number** , and this should be the phone number you are giving for them to contact you as well.
    * REMEMBER: the HCPs are busy and do not have the time to be emailing and speaking with reps throughout the day and that is why they are using this service instead. The more that we handle the communication, the more it helps the HCP
  * If the manufacturer needs to speak directly with the HCP:
    * Give HCP contact info ONLY if permitted by the HCP
    * Give practice contact info (office number and email if you can find it online)
    * Can request rep/support number to contact so that HCP can call back themselves/whenever works best for their schedule.

---

### Manufacturer Contact Directory

*Article ID: 43636888074772*

## **Phone Numbers**

 _Contact numbers for rep requests, account setup, or status updates._

**Manufacturer** | **Medications** | **Phone Number** | **Notes**  
---|---|---|---  
**AbbVie / Allergan** | Creon, Restasis | 800-441-4987 | For Sales Rep info / Sample requests  
**Abbott** | Freestyle Libre | 855-852-4527 | Request Rep to deliver starter kits  
**Allergan Aesthetics** | Botox | 844-639-2246 | Account setup & Rep connection  
**Bausch + Lomb** | Blink eye drops, Lumify | 855-542-5682 | Service associate  
**Calmoseptine** | Calmoseptine | 800-800-3405 | (Fax: 714-840-9810)  
**CeraVe** | CeraVe | 844-CERAVE-1 | (844-237-2831)  
**Currax Pharmaceuticals** | Contrave | 1-800-793-2145 | Request samples and rep visit  
**Insulet** | Omnipod | 1-800-591-3455 | Support to request local rep contact  
**Intra-cellular Therapies** | Caplyta | 888-252-4824 | Request samples & rep visit  
**Lenz** | Vizz | 1-888-711-5369 | Contact center  
**Lubricity** | Lubricity | 716-204-7215 | Follow-up number  
**Novo Nordisk** | Rybelsus | 800-727-6500 | Get local rep info  
**Organon** | VTAMA | 844-674-3200 | Service Center  
**PfizerPro** | Eliquis, Nurtec ODT, Xtandi | 1-800-505-4426 |  Samples and Rep   
  
**Refresh Concierge** | Refresh Artificial Tears | 833-733-7675 | Samples request  
**Sun Pharma** | Cequa | 800-818-4555 | Samples request  
**Uribel** | Uribel | 210-696-8400 | Samples request  
**Vanicream** | Vanicream | 800-325-8232 | For status updates on delivery  
**Vivitrol** | Vivitrol | 800-848-4876 | Customer Service  
**Voquezna** | Voquezna | 877-742-8466 | Status updates  
**Xdemvy** | Xdemvy | 1-888-421-4002 | Customer Service  
**Xolair** | Xolair | 866-496-5247 | Request sample & rep visit  
  
## 

## 

## **Email & Rep Request Contact Links**

 _Direct links to "Contact Us" pages, "Request a Rep" forms, or support emails._

**Manufacturer / Brand** | **Medications Found** | **Contact Link / Email**  
---|---|---  
**Anzupgo** | Anzupgo | [anzupgohcp.com/contact-us](https://www.anzupgohcp.com/contact-us)  
**Bausch Health** | Cabtreo, Jublia, Xifaxan |  [bauschhealth.com/about-us/contact-us](https://www.bauschhealth.com/about-us/contact-us/) (Use Chat Box)  
**BD Syringes** | BD Syringes | customer_support@bd.com  
**Botox** | Botox | [botoxone.com/request-a-rep](https://www.botoxone.com/request-a-rep)  
**Cimzia** | Cimzia | [cimziainoffice.com/request-a-representative](https://www.cimziainoffice.com/request-a-representative)  
**Eisai** | Dayvigo | [eisaiengage.com/request-a-sales-professional](https://www.eisaiengage.com/request-a-sales-professional)  
**Dexcom** | Dexcom G7 | clinics@dexcom.com or professionaltechsupport@dexcom.com  
**Dupixent** | Dupixent | [dupixenthcp.com/contact-a-rep](https://www.dupixenthcp.com/contact-a-rep)  
**Pierre Fabre** | Hemangeol |  [hemangeol.com/physician/physician-resources/#visit](https://hemangeol.com/physician/physician-resources/#visit)   
Email: us.hemangeol.inquiries@pierre-fabre.com  
**Hyftor** | Hyftor | [hcp.hyftor.com/contact-us](https://hcp.hyftor.com/contact-us/)  
**Mayne Pharma** | Imvexxy | [imvexxy.com/hcp/support-and-access](https://www.imvexxy.com/hcp/support-and-access/)  
**Vertex** | Journavx | pain_marketing@vrtx.com  
**Letybo** | Letybo |  [letybousa.com](https://www.letybousa.com/) (Click "Connect with a Letybo rep")  
**Licart** | Licart | IBSASRF@qpharmacorp.com (For emailing forms)  
**Lilly** | Ebglyss, Jardiance, Mounjaro | [medical.lilly.com/us/products/contact/samples-and-sales-representative-request](https://medical.lilly.com/us/products/contact/samples-and-sales-representative-request)  
**Lilly** | Zepbound |  [zepbound.lilly.com/request-resources](https://zepbound.lilly.com/request-resources) (Request Demo Kit/Rep)  
**Bausch + Lomb** | Miebo | [repfinder.bausch.com](https://repfinder.bausch.com/)  
**Mighty Me** | Mighty Me Nutty Puffs | providers@missionmightyme.com  
**Nemluvio** | Nemluvio | [nemluviohcp.com/request-support](https://www.nemluviohcp.com/request-support)  
**Insulet** | Omnipod | [omnipod.com/hcp/omnipod-connect/about](https://www.omnipod.com/hcp/omnipod-connect/about)  
**Optase** | Optase Hylo | hello@optase.com  
**Opzelura** | Opzelura | [opzeluraontrachcp.com/contact](https://www.opzeluraontrachcp.com/contact)  
**Otezla** | Otezla | [otezlapro.com/request-a-rep](https://www.otezlapro.com/request-a-rep/)  
**Journey Medical** | Qbrexza | contact@jmcderm.com  
**Rexulti** | Rexulti | [rexultihcp.com/request-a-rep](https://www.rexultihcp.com/request-a-rep)  
**ReachRx** | Rhofade | [reachrx.ai/mayne_contact](https://www.reachrx.ai/mayne_contact)  
**Rinvoq** | Rinvoq | [rinvoqhcp.com/contact-a-rep](https://www.rinvoqhcp.com/contact-a-rep)  
**Salonpas** | Salonpas | salonpas@pjmcnerney.com  
**Sente** | Sente Tinted Sunscreen | [sentelabs.com/pages/contact-us](https://sentelabs.com/pages/contact-us)  
**Silagen** | Silagen | [silagen.com/contact-us](https://www.silagen.com/contact-us/)  
**Sunosi** | Sunosi | [sunosihcp.com/contact-rep](https://www.sunosihcp.com/contact-rep)  
**Symbravo** | Symbravo | [symbravohcp.com/request-a-rep](https://www.symbravohcp.com/request-a-rep/)  
**Tiger Balm** | Tiger Balm | contactpopus@gmail.com  
**Tremfya** | Tremfya |  [tremfyahcp.com](https://www.tremfyahcp.com/) (Use "Request a rep" webform)  
**Vevye** | Vevye | [vevye.com/hcp/contact](https://vevye.com/hcp/contact)  
**Vivitrol** | Vivitrol | [vivitrolhcp.com/request-a-representative](https://www.vivitrolhcp.com/request-a-representative)  
**Lenz** | Vizz | [vizz.com/ecp](https://www.vizz.com/ecp)  
**Voquezna** | Voquezna | [voqueznapro.com/request-a-rep](https://voqueznapro.com/request-a-rep)  
**Xolair** | Xolair | [xolairhcp.com/contact-rep.html](https://www.xolairhcp.com/contact-rep.html)  
**Zoryve** | Zoryve | [zoryvehcp.com/connect-with-us](https://www.zoryvehcp.com/connect-with-us)

---

### Manufacturer Message Template

*Article ID: 43636560449172*

**Email or Web Submission Message**  
**(For making requests on HCP's behalf)**

**Subject:** Requesting More Information on [ Samples for Healthcare Professionals/Rep Visits]

Dear _[Manufacturer]_ Team,

I’m reaching out on behalf of _[HCP Name]_ to inquire about [scheduling a visit from a _[__brand name_ _]_ representative / requesting samples of _[__brand name_ _]_ for their practice. This would help support patient care and ensure access to the appropriate resources.

Please let me know the best way to proceed or if any additional information is needed. You can reach me at _[Your Contact Information (__Email & Phone number_ _)]_ at your earliest convenience.

Thank you in advance for your assistance.

Best regards,  
_[Your Full Name]_  
_[Your Contact Information]_

**Phone Call Verbiage**  
Hello, I am calling on behalf of [provider name] with [provider practice name]. They would like [to get in touch with their local (brand name)rep/more information on the availability of (brand name) samples]. 

**If they ask who you are/why you’re calling on behalf of the HCP**  
I am assisting [provider name] with this request.

**When asked about DocUpdate:**

**More information**

 _As time goes on, reps are going to start recognizing us and they may ask who we are and why we’re ordering samples for prescribers. This is actually already starting to happen!_

_We should be able to introduce ourselves to them in a general sense. We can describe that our goal is to connect prescribers with the resources they’re looking for so that they have more time to help their patients._

**Examples of what to say:**

“We’re Concierge, a service being offered by DocUpdate. We help doctors or other healthcare providers with prescription orders, answering any questions they might have, and helping them with sample requests or rep visits.”

“We provide these services for free through an app you can download and use with an NPI number.”

“I’m happy to answer more questions about us if you would like or you can reach out to our HCP Coordinators as well for more information at [nicholas@docupdate.io](mailto:nicholas@docupdate.io) or [lauren@docupdate.io](mailto:lauren@docupdate.io)”

#

---

### Terms Cheat Sheet

*Article ID: 43636506678292*

**HCP****: Healthcare Professional**

  * Who we service. 
  * These include Doctors (MD, DO, PharmD, DDS, etc)
  * And other practitioners (FNP, NP, PA, RN, etc)
  * May also be called **Providers**



**MSL****: Medical Science Liaison**

  * These are experts on specific medications/treatment areas for manufacturers. Any requests for MSLs can be treated similarly to rep requests, but reps are NOT MSLs (important to know the difference). MSLs do not directly sell or promote items; their purpose is only to exchange educational information.




**NDC****: National Drug Code** (number assigned to a pharmaceutical product)

  * Any questions here can be directed towards Nick. Under the quick guides can find the link to the NDC directory. 



**“Rep”****: pharmaceutical sales representative** who works for the pharmaceutical manufacturer.

  * There is typically someone assigned to each area/territory around the country. 
  * They can typically visit HCP offices to deliver samples, educational materials, and to answer any questions about a product that the HCP is interested in. 



**Prescriber****:** this is another function on the Docupdate app, where HCPs can place prescriptions for patients. Many users find docupdate additionally for the prescription services before using concierge and may have questions about the Prescriber feature as well. 

May receive questions about:

  * ID approval
  * Controlled substances
  * EHR/EMR integration
  * Do they call, fax, or e-prescribe
  * Turnaround time 



For any prescriber questions you receive, you can find common answers on the Prescriber FAQ page, otherwise the question should be reported in the Concierge Channel & likely escalated to the support team via giving the HCP the support email address.

**NPI:****National Provider Identifier.**

  * This is a unique 10 digit number and any HCP will have on assigned to them
  * You will need to have this number handy when handling any type of request for the HCP. 




**License number:** this is a unique code (can be numbers or a mix of letters & numbers) that identifies an HCP's licensed area of practice & location. Some manufacturers may require this information when handling requests. This information can be found on the NPI registry and you should include the license state when giving this information.

  * For example, these are some of the ways it may appear on the NPI Registry: 



GA License # 95336

FL License # ME125067

IN License # 01094009A

FL Medicaid 015006900

**Lunch & Learn:** This is an informal educational event that takes place at a medical practice or a restaurant near the practice. During these events, a pharma sales rep or MSL will provide lunch to the office staff and give an educational presentation about the product or treatment area. 

  * If HCPs make requests for events or lunch & learns specifically, we should treat it as a rep visit, but be specific in our request that they want a lunch & learn visit. If the manufacturer/rep offers these types of events, then we can proceed with scheduling it.



Conference & Dinner Events

---

### What Phone number and email to use for requests

*Article ID: 43605558229140*

### What phone number and email to use during requests

  * All communication directly with **HCPs** should be handled using the **Concierge Primary** phone line.
  * As much as possible, use the Concierge email ([Concierge@docupdate.io](mailto:Concierge@docupdate.io)) when giving contact information during requests. As emails arrive in this inbox with updates, they will be shared in the channel or added directly to their appropriate ticket. 
  * When **speaking with a manufacturer** , please use your **own OpenPhone number** , and this should be the phone number you are giving for them to contact you as well.
    * REMEMBER: the HCPs are busy and do not have the time to be emailing and speaking with reps throughout the day and that is why they are using this service instead. The more that we handle the communication, the more it helps the HCP
  * If the manufacturer needs to speak directly with the HCP:
    * Give HCP contact info ONLY if permitted by the HCP
    * Give practice contact info (office number and email if you can find it online)
    * Can request rep/support number to contact so that HCP can call back themselves/whenever works best for their schedule.

---

### Home Address

*Article ID: 43605481608340*

### If an HCP wants samples sent to their home address

  * Let them know that per manufacturer guidelines, we are only able to send samples to an official medical practice. (see address examples under the Templates doc)
    * If they bring up concerns about the samples not getting to them if delivered to the practice location (someone else signing, busy hospital, etc.), let them know that we can address the order to them or ask the rep specifically to make sure they meet with them. 
      * To address items directly to them, include “ATTN: THEIR NAME” in the first line of the address.   
For example:  
  
ATTN: DR. OSAMA HASHMI

Advanced Dermatology and Cosmetic Surgery  
771 Old Norcross Rd, Ste 260  
Lawrenceville, GA 30046

  * If they do not have a physical practice location, they likely are not able to eligible to receive product samples.
    * If they run a mobile or traveling practice, see if there is a physical location that they are associated with or could use to meet a rep at, and then we can proceed if the rep can meet there AND can provide samples to a travel/mobile practice (many of these practices just may not be eligible to receive samples).

---

### Student NPI

*Article ID: 43605454646932*

### When HCP is a student

  * Some students can make requests for samples & reps on their own, but some may need supervising physician assistance to proceed. 
  * If a request comes in from a confirmed student NPI, proceed with the request as normal. If the manufacturer informs you that they are unable to complete the request using the student's NPI, inform the requesting HCP of this and suggest that their supervisor reach out to us or make the request themselves instead.

---

### Credentials Guide

*Article ID: 43605382541844*

How to address HCPs based on their credentials:  


 _**Hello Dr.**__**Last-name**_

  * Credential: MD, DO, PharmD, DDS



 _**Hello**_ _**First-name**_

  * Credential: NP, PA, RN, APRN, FNP, AuD

---

### Follow-up Timelines

*Article ID: 43605128020116*

**Follow-Up Timelines**

Same Day  
---  
You’re assigned a ticket - you should send an intro message the same day.   
Intro message was sent. Follow up by EOD on status.  
  
1-2 Days  
---  
If the intro message was sent in the last 2 hours of the previous day, follow up the next day with a status update.   
Follow up after sending an intro message for a general or non-request message.  
You completed a request or sent a portal link to an HCP. Follow up 1-2 days later to see if they wanted to make another request.  
  
2-3 Days  
---  
Requested more information from the HCP to proceed with the request (topic areas for grants, practice address for rep/samples).   
You sent a follow-up message to an HCP for additional info.   
  
5-7 days  
---  
Once a rep/sample request has been submitted or an email has been sent to the manufacturer, schedule a follow-up in 5–7 days to reach out to the manufacturer or the HCP if no updates have been received.  
  
Manufacturer based  
---  
If a manufacturer provides a specific timeline for when you should hear back or delivery of rep/samples is expected, use that timeframe to schedule your follow-up. This will allow you to confirm the status with the HCP accordingly.

---

### New Ticket Process

*Article ID: 43604897432084*

**When to Create a New Ticket:**

  1. When someone reaches out with a new request
     1. If they make multiple requests at once, these can all be included within 1 ticket
  2. If you’re having a conversation with someone regarding another ticket, and they request an additional, separate item



**Should Not Create a New Ticket when:**

  1. You make an alternative suggestion for an item and they accept that suggestion
  2. Multiple items come in within 1 submission



**For new tickets:**

Flag to Nick & Lauren to create for you

---

### Prescriber FAQs

*Article ID: 43604890490900*

####  **When an HCP asks questions about DocUpdate Prescriber, or asks for help with prescriptions**  
  
**What is the turnaround time on prescriptions?**

ePrescribing transmission is near-instant — pharmacies usually receive it within seconds. If you have any questions about a specific prescription that was submitted, please contact [support@docupdate.io](mailto:support@docupdate.io), and our support team will be able to assist you.

#### **Questions about controlled substances**

Prescriber is unable to support the prescribing of controlled substances at this time. We sincerely appreciate your patience while we are working on upgrading this functionality. 

#### **How is the app free? / “What’s the catch?”**

Our app allows users to receive helpful, relevant information tailored to their specialty, including updates from trusted pharmaceutical brands. These messages are carefully curated and delivered directly from DocUpdate, never from third parties, and help keep you informed while supporting the free use of our platform.

---

### Ticket Statuses

*Article ID: 43603894842388*

**For Tracking Tickets:**  
  
**New:** This is a new ticket that has been created, but no communication has been sent to the HCP

**Open** : This is for a new ticket that has been assigned to you, but you have not started working on yet. Once you initiate contact with the HCP, this should be changed to **Responded**

**Responded:** An introduction message was sent to the HCP (we have not contacted a rep or manufacturer yet)

**In Progress:** The manufacturer/rep has been contacted, you are researching the ticket, or are otherwise working on getting this ticket completed for the HCP. This includes if we have filled out a form for samples but have not gotten a shipping confirmation. The HCP should have been updated that this has been started, and we will follow up with any new info once we have it. 

**Awaiting Confirmation** : We have sent the portal link to the HCP, we have a message confirming the samples have shipped, have sent them the rep’s information, the rep has said they are reaching out to the HCP, or a rep visit is scheduled. We are only waiting for the HCP to confirm receipt of the sample, or confirm the rep visit has been completed. 

**On Hold:** This status is only used if we are waiting on information without an appropriate estimate of when that information will be available (i.e., HCP is waiting 4-6 weeks for registration approval, HCP requested samples for a product that has not been released yet and we are unsure of the release date, etc). Ask in the channel before you set any tickets to this status.

**Resolved:** We have received confirmation from the HCP and/or rep that the visit took place or that the samples were delivered.

**Done** : When we sent the samples portal, we have confirmation of samples shipment, or have been notified the rep will be in contact with the HCP, **but the HCP has become unresponsive****, or when the HCP is ineligible for samples per manufacturer guidelines**

**Disregard:** For a duplicate ticket or when a ticket is created by accident. Let Nick and Lauren know before disregarding an item.

**For Conversation Tickets:**

**Responded** : this is the status that CONVERSATION tickets will change to when the HCP has responded to you. If a CONVERSATION ticket is in status "Responded", you need to reach out to the HCP!  
  
**Awaiting Response** : Once you respond to the HCP, you should set the CONVERSATION ticket to "Awaiting Response" so the status changes color and we know you have responded to the HCP.

**No Active Tickets** : Set the CONVERSATION tickets to this status when ALL ACTIVE TICKETS ARE COMPLETED. This is so if the HCP reaches out in the future, this ticket will reactivate and we'll still have a running history of what the HCP said to us in the past.

---


## Product Guide

### Powerstep Orthotics

*Article ID: 46907383922324*

**Brand Name:** Powerstep Orthotics

**Manufacturer:** PowerStep (Foundation Wellness)

**Alt names:** PowerStep Insoles, PowerStep Orthotic Insoles, PowerStep Inserts

**Use:** Arch support shoe inserts used to relieve foot pain and improve foot alignment

**Specialty:** Podiatry / Orthopedics 

**Process Type:** Samples and Rep 

**Process:**

  1. Gather HCP information (name, practice name, address, contact details) and submit a sample request form: <https://foundationwellness.com/pages/resident-protech-sample-request?srsltid=AfmBOooC9ZTsNGvn2WBi2h-OanMPU5BmjTjUPTkZUGu7A1wd8zOx1Ba2>

  2. Send a message through the contact page indicating that you are requesting Powerstep orthotics samples for your practice: <https://foundationwellness.com/pages/contact>

  3. After submitting the request and contact message, a local Powerstep representative will reach out via email to coordinate the sample request or arrange a visit.

---

### Kevzara

*Article ID: 46906198741396*

**Brand Name:****** Dupixent

**Manufacturer:** Sanofi and Regeneron

**Alt names:****** sarilumab

**Use:****** Rheumatoid Arthritis, Polymyalgia Rheumatica, Polyarticular Juvenile Idiopathic Arhtritis 

**Process Type:****** Samples

**Portal Link:******<https://sanofisamplingportal-us.com/authentication/login>

**Alternate Process:**

  1. Gather HCP information including NPI and Practice Address
  2. Call 800-973-3620, provide agent with HCP information
  3. They should be able to inform us if an HCP has samples allocated to them through the sampling portal, including how much the HCP can order and how often
     1. If HCP does not have samples allocated to them, Sanofi will email a form that the HCP can fill out and fax back to them
  4. Once eligibility has been confirmed, inform HCP that they can order through the Sanofi Sampling portal: [sanofisamplingportal-us.com](http://sanofisamplingportal-us.com/)

---

### Cialis

*Article ID: 46873621646228*

**Brand Name:** Cialis

**Manufacturer:** Eli Lilly****

**Alt Names:** tadalafil

**Use:** treatment for erectile dysfunction

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Zenpep

*Article ID: 46873324840212*

**Brand Name:** Zenpep

**Manufacturer:** Nestlé Health Science (manufactured by Aimmune Therapeutics, Inc.) 

**Alt names:** pancrelipase

**Use:** Pancreatic enzyme replacement for exocrine pancreatic insufficiency

**Specialty:** Gastroenterology 

**Process Type:** Samples

**Portal Link:** <https://nestle.mysamplecloset.com/login>

---

### Spravato

*Article ID: 46845434925588*

**Brand Name:** Spravato

**Manufacturer:** Janssen Pharmaceuticals, Inc. (Johnson & Johnson)

**Alt names:** esketamine

**Use:** Treatment-Resistant Depression, Major Depressive Disorder

**Specialty:** Psychiatry

**Process Type:** Samples and Rep

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP Information including Practice Address and Specialty
  2. Submit Rep Request at <https://www.spravatohcp.com/request-a-rep/>
  3. Keep HCP informed of any updates

---

### Pepcid

*Article ID: 46813213874964*

**Brand Name** : Pepcid

**Manufacturer** : Kenvue

**Alternative Name** : famotidine

**Use** : H2 blocker for heartburn

**Note** : **UNCONFIRMED PROCESS**

**Portal Link** : <https://kenvuepro.com/en-us/>

---

### Lo Loestrin Fe

*Article ID: 46807300963732*

**Brand Name:** Lo Loestrin Fe

**Manufacturer:** Allergan (AbbVie)

**Alt names:** N/A

**Use:** Combination oral contraceptive (birth control pill) used to prevent pregnancy

**Specialty:** Women’s Health / OB-GYN

**Process Type:** Samples

**Portal Link:**<https://abbvie.mysamplecloset.com/login>

**Additional Resources:**<https://hcp.loloestrin.com/hcp-resources/support-for-your-practice>

---

### Eysuvis

*Article ID: 46688073093780*

**Brand Name** : Eysuvis

**Manfacturer** : Alcon

**Alternative Name** : Loteprednol etabonate

**Use** : Short term treatment of dry eye

**Specialty** : Optometry, Ophthalmology

**Portal Link** : <https://alcon.qpharmacorp.com/>

---

### Vitamin and Supplement Resources 

*Article ID: 46680410197652*

[**Ddrops**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534433054996)  
Liquid vitamin D supplement (usually vitamin D3), often used for infants, children, or adults who prefer drops over pills.

[**DEKAs Plus**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534441878292)  
High-potency multivitamin designed for people with fat-malabsorption conditions (commonly used in cystic fibrosis). Contains vitamins D, E, K, and A in enhanced-absorption forms.

[**Ensure**](https://impiricussupport.zendesk.com/hc/en-us/articles/46611534646420)  
Nutritional shake providing calories, protein, vitamins, and minerals. Often used for weight maintenance, recovery, or when appetite is poor.

[**Equelle**](https://impiricussupport.zendesk.com/hc/en-us/articles/43612650542612)  
Plant-based supplement containing S-equol, used to help relieve menopausal symptoms such as hot flashes.

[**Feosol**](https://impiricussupport.zendesk.com/hc/en-us/articles/46178560524564)  
Iron supplement used to treat or prevent iron deficiency anemia.

[**Hiya Supplements**](https://impiricussupport.zendesk.com/hc/en-us/articles/43556527878676)  
Pediatric multivitamin brand offering chewable vitamins formulated for children.

[**Juven**](https://impiricussupport.zendesk.com/hc/en-us/articles/46449541216020)  
Therapeutic nutrition drink mix containing arginine and HMB, used to support wound healing and muscle preservation.

[**Mag-Tab SR**](https://impiricussupport.zendesk.com/hc/en-us/articles/43406681403028)  
Slow-release magnesium supplement used to treat or prevent magnesium deficiency.

[**Maximum D3**](https://impiricussupport.zendesk.com/hc/en-us/articles/43566008926868)  
High-dose vitamin D3 supplement used to correct or prevent vitamin D deficiency.

[**Metamucil**](https://impiricussupport.zendesk.com/hc/en-us/articles/43406993576084)  
Fiber supplement (psyllium husk) used to relieve constipation and support digestive health.

---

### Trintellix

*Article ID: 46675036554772*

**Brand Name:** Trintellix

**Manufacturer:** Takeda Pharmaceuticals

**Alt names:** Vortioxetine

**Use:** Treatment of major depressive disorder (MDD) in adults

**Specialty:** Psychiatry

**Portal Link:**<https://takeda.mysamplecloset.com/login>

---

### Women's Health Resources

*Article ID: 46639196128148*

**Reproductive Health & Gynecology**

[Myfembree](https://impiricussupport.zendesk.com/hc/en-us/articles/45764406189972)  
Once-daily oral medication used to treat heavy menstrual bleeding from uterine fibroids and pain from endometriosis.

[Endometrin](https://impiricussupport.zendesk.com/hc/en-us/articles/46431692067988)  
Vaginal progesterone insert used during fertility treatment to support early pregnancy and help prepare the uterus for embryo implantation.

[Lo Loestrin Fe](https://impiricussupport.zendesk.com/hc/en-us/articles/46807300963732)  
Combination oral contraceptive (birth control pill) used to prevent pregnancy. 

[Tyblume](https://impiricussupport.zendesk.com/hc/en-us/articles/44413302723348)  
Chewable birth control pill used to prevent pregnancy and help regulate menstrual cycles; contains low-dose estrogen and progestin.

**Menopause & Postmenopausal Care**

[Accrufer](https://impiricussupport.zendesk.com/hc/en-us/articles/42876977086228)  
Oral iron therapy for treatment of iron deficiency.

[Climara Pro](https://impiricussupport.zendesk.com/hc/en-us/articles/44953790652308)  
Once-weekly hormone patch that contains estrogen and progestin; used to treat hot flashes and help prevent bone loss in postmenopausal women with a uterus.

[Combipatch](https://impiricussupport.zendesk.com/hc/en-us/articles/44953802684948)  
Twice-weekly hormone patch with estrogen and progestin; used to treat hot flashes and help protect against bone loss after menopause.

[Duavee](https://impiricussupport.zendesk.com/hc/en-us/articles/44953666238996)  
Oral medication that combines estrogen with a selective estrogen receptor modulator (SERM); used to treat hot flashes and help prevent osteoporosis after menopause.

[Equelle](https://impiricussupport.zendesk.com/hc/en-us/articles/43612650542612)  
Non-hormonal supplement used to relieve menopausal symptoms such as hot flashes.

[Evenity](https://impiricussupport.zendesk.com/hc/en-us/articles/46611758675348)  
Monthly injection used to treat osteoporosis and reduce fracture risk in postmenopausal women at high risk for broken bones.

[Imvexxy](https://impiricussupport.zendesk.com/hc/en-us/articles/42595480847508)  
Low-dose vaginal estrogen insert used to treat painful intercourse and vaginal dryness due to menopause.

[Tymlos](https://impiricussupport.zendesk.com/hc/en-us/articles/45551331850772)  
Once-daily injection used to treat osteoporosis in postmenopausal women at high risk for fracture.

[Veozah ](https://impiricussupport.zendesk.com/hc/en-us/articles/42594120511636)  
Non-hormonal oral medication used to treat moderate-to-severe hot flashes associated with menopause.

[VIA Vaginal Moisturizer](https://impiricussupport.zendesk.com/hc/en-us/articles/46611976802324)  
Hormone-free vaginal moisturizer used to relieve vaginal dryness and discomfort related to menopause.

**Sexual Desire Treatment**

[Addyi](https://impiricussupport.zendesk.com/hc/en-us/articles/42595869984148)  
Once-daily oral medication used to treat low sexual desire (HSDD) in premenopausal women.

[Vyleesi](https://impiricussupport.zendesk.com/hc/en-us/articles/44185498958996)  
As-needed injection used to treat low sexual desire (HSDD) in premenopausal women.

---

### Skincare Resources

*Article ID: 46617566456468*

**Skincare**

[**Aquaphor**](https://impiricussupport.zendesk.com/hc/en-us/articles/44213779455124)  
A healing ointment brand that protects and repairs very dry, cracked, or irritated skin by sealing in moisture.

[**Carpe**](https://impiricussupport.zendesk.com/hc/en-us/articles/44412776911124)  
A sweat-control brand offering dermatologist-developed solutions for excessive sweating and odor.

[**CeraVe**](https://impiricussupport.zendesk.com/hc/en-us/articles/43612214239636)  
A dermatologist-developed skincare brand focused on restoring and maintaining the skin barrier with ceramides.

[**CLn Skin Care**](https://impiricussupport.zendesk.com/hc/en-us/articles/46573494440724)  
A therapeutic skincare line designed for sensitive, irritated, or compromised skin.

[**Eucerin**](https://impiricussupport.zendesk.com/hc/en-us/articles/44213725397268)  
A clinical skincare brand specializing in hydration and relief for dry, eczema-prone, and sensitive skin.

[**L’Oréal**](https://impiricussupport.zendesk.com/hc/en-us/articles/44412626802196)   
A global beauty brand offering mass-market skincare focused on anti-aging, brightening, and hydration with brands including [La Roche Posay](https://impiricussupport.zendesk.com/hc/en-us/articles/44184563410068), VICHY, [CeraVe](https://impiricussupport.zendesk.com/hc/en-us/articles/43612214239636), SkinCeuticals, and Skin Alliance.

[**Vanicream**](https://impiricussupport.zendesk.com/hc/en-us/articles/43615695997076)  
A minimalist, fragrance-free skincare brand formulated for highly sensitive or reactive skin.

**Sunscreen**

[**EltaMD**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534664282132)  
A dermatologist-recommended sunscreen brand known for lightweight, gentle, and acne-friendly formulas.

[**ISDIN**](https://impiricussupport.zendesk.com/hc/en-us/articles/43612740312980)  
A European sun-care brand focused on advanced UV protection and photoaging prevention.

[**Kenvue**](https://kenvuepro.com/en-us/login?redirect=%2Fsamples)  
HCP portal providing product information, educational resources, and clinical materials across Kenvue’s consumer health brands, including [Aveeno](https://impiricussupport.zendesk.com/hc/en-us/articles/43534167619860) and [Neutrogena](https://impiricussupport.zendesk.com/hc/en-us/articles/46207443136276) sunscreen products.

[**Sente**](https://impiricussupport.zendesk.com/hc/en-us/articles/43615457101076)  
A mineral sunscreen brand designed to protect against UV exposure while supporting even-looking skin tone.

**Injectables / Aesthetics**

[**Botox**](https://impiricussupport.zendesk.com/hc/en-us/articles/43593256601236)  
A neuromodulator injectable that temporarily relaxes facial muscles to reduce the appearance of dynamic wrinkles.

[**Juvéderm**](https://impiricussupport.zendesk.com/hc/en-us/articles/46026293432980)  
A hyaluronic acid–based dermal filler used to restore facial volume and smooth wrinkles.

---

### Quviviq

*Article ID: 46616984304020*

**Brand Name:** Quviviq

**Manufacturer:** Idorsia

**Alt names:** Daridorexant

**Use:** Treatment of insomnia (difficulty with sleep onset and/or sleep maintenance)

**Specialty:** Sleep Medicine / Neurology

**Process Type:** Rep 

**Process:**

  1. Call the manufacturer (Idorsia) at (888) 971-7050 
  2. Press the option to request medical information



**Note:** No in-person rep visits field available, but they do provide virtual meetings with lunches included.

---

### VIA

*Article ID: 46611976802324*

**Brand Name:** VIA

**Manufacturer:** TherapeuticsMD

**Alt names:** VIA Vaginal Moisturizer

**Use:** Non-hormonal vaginal moisturizer indicated for the relief of vaginal dryness and discomfort

**Specialty:** Gynecology

**Process Type:** Samples

**Sample Request Form:**<https://hcp.solvwellness.com/request-patient-materials/>

---

### Evenity

*Article ID: 46611758675348*

**Brand Name:** Evenity

**Manufacturer:** Amgen

**Alt names:** Romosozumab-aqqg

**Use:** Monoclonal antibody indicated for the treatment of osteoporosis in postmenopausal women at high risk for fracture

**Specialty:** Endocrinology

**Process Type:** Rep 

**Process:**

  1. Gather HCP information 
  2. Submit rep request here: <https://www.evenityhcp.com/connect-with-a-representative>

---

### Ensure

*Article ID: 46611534646420*

**Brand Name:** Ensure

**Manufacturer:** Abbott Laboratories

**Alt names:** Ensure Original, Ensure Plus, Ensure Nutrition Shake

**Use:** Oral nutritional supplement formulated to provide complete, balanced nutrition for patients with malnutrition, weight loss, or increased nutritional needs

**Specialty:** Nutrition

**Process Type:** Samples

**Sample Form Link:**<https://nutritionresources.abbottnutrition.com/>

---

### Entyvio

*Article ID: 46578837097876*

**Brand Name:** Entyvio

**Manufacturer:** Takeda

**Alt names:** Vedolizumab

**Use:** Treatment of moderately to severely active ulcerative colitis and Crohn’s disease

**Specialty:** Gastroenterology

**Process Type:** Rep 

**Process:**

  1. Gather HCP information
  2. Submit rep request form here: <https://www.entyviohcp.com/request-a-representative>

---

### Tamiflu

*Article ID: 46574070978324*

**Brand Name:** Tamiflu

**Manufacturer:** Genentech 

**Alt names:** Oseltamivir

**Use:** Antiviral indicated for treatment and prophylaxis of influenza A and B

**UNAVAILABLE FOR SAMPLES OR REPS**

**Alternative:**[Xofluza](https://impiricussupport.zendesk.com/hc/en-us/articles/42596142920724)

---

### CLn Skin Care

*Article ID: 46573494440724*

**Brand Name:** CLn Skin Care

**Manufacturer:** TopMD Skin Care

**Alt names:** CLn

**Use:** Medicated skin cleansers for eczema-prone, acne-prone, and infection-prone skin

**Specialty:** Dermatology

**Process Type:** Samples 

**Process:**

  1. Gather HCP information (Practice Address, Speciality)
  2. Order samples here: <https://www.clnmd.com/pages/samplekit>
  3. A tracking number is sent out by email after filling out the form
  4. Contact [(877) 992-7425](tel:8779927425) if no tracking number is sent

---

### Lotemax

*Article ID: 46573113053460*

**Brand Name:** Lotemax

**Manufacturer:** Bausch + Lomb

**Alt names:** Loteprednol etabonate

**Use:** Treatment of eye inflammation and pain

**Specialty:** Ophthalmology

**Process Type:** Samples 

**Portal Link:** <https://bauschlomb.mysamplecloset.com/login>

---

### Tobradex

*Article ID: 46572914869268*

**Brand Name:** Tobradex

**Manufacturer:** Alcon

**Alt names:** Tobramycin / Dexamethasone

**Use:** Treatment of bacterial eye infections and associated inflammation

**Specialty:** Ophthalmology

**Process Type:** Samples

**Process:**

  1. Gather HCP information (Name, Practice Address, License State, Specialty)
  2. Complete samples request form here: <https://www.tobradexst.com/samplerequestform/>

---

### Unithroid

*Article ID: 46572171050772*

**Brand Name:** Unithroid

**Manufacturer:** Amneal Pharmaceuticals

**Alt names:** Levothyroxine sodium

**Use:** Treatment of hypothyroidism; thyroid hormone replacement therapy

**Specialty:** Endocrinology

**Process Type:** Samples 

**Portal Link:**[**https://unithroidhcp.com/samples**](https://unithroidhcp.com/samples)****

---

### Viberzi

*Article ID: 46516518498580*

**Brand Names:** Viberzi

**Manufacturer:** Abbvie

**Alt names:** eluxadoline

**Use:** Irritable Bowel Syndrome with Diarrhea (IBS-D) in adults

**UNCONFIRMED PROCESS**

**Portal Link:**<https://abbvie.mysamplecloset.com/login>

**Additional resources** : <https://www.viberzihcp.com/resources-and-support>

---

### Trulance

*Article ID: 46516305948692*

**Brand Names:** Trulance

**Manufacturer:** Salix Pharmaceuticals (subsidiary of Bausch Health)

**Alt names:** Trulance

**Use:** Treatment of Chronic Idiopathic Constipation and Irritable Bowel Syndrom with Constipation in adults

**UNCONFIRMED PROCESS**

**Portal Link:**<https://www.mysamplecloset.com/login>

**Additional resources** : https://www.trulance.com/hcp/resources

---

### Staxyn

*Article ID: 46516221595668*

**Brand Names:** Staxyn

**Manufacturer:** Bayer healthcare

**Alt names:** vardenafil

**Use:** Erectile dysfunction

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Stendra

*Article ID: 46516178964116*

**Brand Names:** Stendra

**Manufacturer:** Vivus

**Alt names:** avanafil

**Use:** Erectile dysfunction

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Juven

*Article ID: 46449541216020*

**Brand Name:** Juven

**Manufacturer:** Abbott Nutrition

**Use:** Therapeutic nutritional drink powder designed to promote wound healing and support tissue repair.

**Process Type:** Samples 

**Portal Link:**<https://nutritionresources.abbottnutrition.com>

---

### Dr. Dan’s Cortibalm

*Article ID: 46431776440340*

**Brand Name:** Dr. Dan’s Cortibalm

**Manufacturer:** Dr. Dan’s

**Alt names:** Cortibalm Lip Balm

**Use:** Medicated lip balm containing hydrocortisone 1% for treatment of severely chapped, cracked, or inflamed lips

**Specialty:** Dermatology

**Process Type:** Samples

**Process:**

  1. Gather HCP info (HCP practice name and address required)
  2. Email [cortibalmsamples@gmail.com](mailto:cortibalmsamples@gmail.com) to request samples
  3. You will receive an email with the shipment information.



**Note:** Samples should take 2-4 business days.

---

### Endometrin

*Article ID: 46431692067988*

**Brand Name:** Endometrin

**Manufacturer:** Ferring Pharmaceuticals

**Alt names:** Progesterone vaginal insert

**Use:** Progesterone supplementation to support early pregnancy

**Specialty:** Reproductive Endocrinology / Fertility

**Process Type:** Samples and rep 

**Process:**

  1. Contact Ferring Pharmaceuticals at [**888-337-7464**](tel:8883377464) to request samples. 
  2. Manufacturer will forward request to a sales representative who will reach out to you directly.
  3. Follow-up with manufacturer as needed.
  4. The sales representative will confirm availability and arrange a visit to deliver the samples.

---

### Similac Infant Formula 

*Article ID: 46431436272020*

**Brand Name:** Similac Infant Formula

**Manufacturer:** Abbott Nutrition

**Use:** Infant formula 

**Specialty:** Pediatrics

**Process Type:** Samples

**UNCONFIRMED PROCESS**

**Process:** HCPs can **r** egister with Abbott's Pediatric ProConnect to request Similac samples here: <https://www.pediatricproconnect.com/home.html>

---

### Enfamil Infant Formula 

*Article ID: 46431200671764*

**Brand Name:** Enfamil Infant Formula

**Manufacturer:** Mead Johnson Nutrition 

**Alt Names:** NeuroPro Infant, NeuroPro Gentlease, Nutramigen with Probiotic LGG, and PurAmino

**Use:** Infant formula 

**Specialty:** Pediatrics

**Process Type:** Samples

**Process:** HCPs can fill out form here: <https://hcp.meadjohnson.com/samples>

---

### Wound Care Resources

*Article ID: 46428056625556*

**Wound Care Dressings & Gels**

[**Aquacel**](https://impiricussupport.zendesk.com/hc/en-us/articles/43533978012948)  
Hydrofiber wound dressing for moderate to heavily exudating wounds.

[**Enluxtra**](https://impiricussupport.zendesk.com/hc/en-us/articles/46293508166548)  
Adaptive wound dressing that self-regulates moisture levels.

[**PluroGel**](https://impiricussupport.zendesk.com/hc/en-us/articles/45834263128596)  
Antimicrobial wound gel for moisture balance and infection control.

**Wound Cleansing**

[**NeilMed**](https://impiricussupport.zendesk.com/hc/en-us/articles/46205823276308)  
Includes NeilCleanse WoundWash and Wound Wash Antiseptic for wound irrigation and cleansing.

**Other Wounds Care Products**

[**Juven**](https://impiricussupport.zendesk.com/hc/en-us/articles/46449541216020)  
Therapeutic nutritional drink powder designed to promote wound healing and support tissue repair.

[**McKesson Lesion Measuring Rulers/Wound Care Products**](https://impiricussupport.zendesk.com/hc/en-us/articles/46024140059028)  
Resources for measuring and documenting wound size and healing progress.

---

### Pediatric Product Resources

*Article ID: 46421208909460*

**Infant Formula & Nutrition**

[**Enfamil Infant Formula**](https://impiricussupport.zendesk.com/hc/en-us/articles/46431200671764)  
Infant formulas including NeuroPro Infant, NeuroPro Gentlease, Nutramigen with Probiotic LGG, and PurAmino.

[**Kendamil Infant Formula**](https://impiricussupport.zendesk.com/hc/en-us/articles/43563420981140)  
European-style infant formula.

[**Similac Infant Formula**](https://impiricussupport.zendesk.com/hc/en-us/articles/46431436272020)  
Various infant formula.

[**Ddrops**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534433054996)  
Vitamin D supplementation for infants and children.

[**Mighty Me Nutty Puffs**](https://impiricussupport.zendesk.com/hc/en-us/articles/43615112531348)  
Peanut-based snack for early allergen introduction.

**Probiotics & Digestive Support**

[**Culturelle**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534312157844)  
Probiotic supplements for infants and children.

[**Omnibiotic**](https://impiricussupport.zendesk.com/hc/en-us/articles/43568052899092)  
Clinically formulated probiotic products.

[**BioGaia**](https://impiricussupport.zendesk.com/hc/en-us/articles/43534181285396)  
Infant probiotic drops for digestive support.

**Vitamins & Supplements**

[**Hiya Supplements**](https://impiricussupport.zendesk.com/hc/en-us/articles/43556527878676)  
Daily multivitamins for children.

**Pain, Fever & Allergy Relief**

[**Kenvue Pediatrics**](https://kenvuepro.com/en-us/registration)  
Infant Motrin, Children’s Motrin, Infants Tylenol, Children’s Tylenol, Infant Tylenol, Children’s Zyrtec.

**Diaper & Skin Care**

[**Desitin**](https://impiricussupport.zendesk.com/hc/en-us/articles/44953660225940)  
Zinc oxide diaper rash treatment.

[**Triple Paste**](https://impiricussupport.zendesk.com/hc/en-us/articles/44953633240212)  
Medicated diaper rash ointment.

---

### Norvasc

*Article ID: 46393808907540*

**Brand Names:** Norvasc

**Manufacturer:** Pfizer

**Alt names:** Amlodipine

**Use:** Treatment of hypertension and angina

**Specialty:** Cardiology

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Aimovig

*Article ID: 46392997358356*

**Brand Name:** Aimovig

**Manufacturer:** Amgen

**Alt names:** Erenumab-aooe

**Use:** Preventive treatment of migraine in adults

**Specialty:** Neurology

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Dysport

*Article ID: 46391677170708*

**Brand Name:** Dysport

**Manufacturer:** Ipsen Biopharmaceuticals

**Alt names:** AbobotulinumtoxinA

**Use:** Treatment of muscle spasticity and cervical dystonia; temporary improvement of glabellar lines

**Specialty:** Neurology / Dermatology

**Process Type:** Rep

**UNCONFIRMED PROCESS**

**Process:** Rep request form: <https://www.dysport.com/en-us/hcp/order-dysport#request-a-rep>

---

### Uplizna

*Article ID: 46389861343380*

**Brand Name:** Uplizna

**Manufacturer:** Amgen

**Alt names:** Inebilizumab-cdon

**Use:** Treatment of neuromyelitis optica spectrum disorder (NMOSD) in adult patients who are anti–aquaporin-4 (AQP4) antibody positive

**Specialty:** Neurology

**Process Type:****** Rep request

**UNCONFIRMED PROCESS**

**Process:****** Rep request form: <https://www.upliznahcp.com/access-and-support/request-a-representative>

---

### Airsupra

*Article ID: 46389699208596*

**Brand Name:** Airsupra

**Manufacturer** : Astrazeneca

**Alt Names:** albuterol / budesonide inhaler

**Use:** as-needed treatment or prevention of bronchoconstriction, reduce the risk of asthma exacerbations in patients aged 18 years and older

**Specialty:** Pulmonology

**Process** :

  1. Gather HCP information including Practice Address and Specialty
  2. Fill out form here: <https://www.astrazeneca-us.com/contact-us/hcp-request-for-pharmaceutical-samples.html>
  3. You may not receive confirmation that the request went through
  4. HCP should receive samples within 1-2 weeks if eligible

---

### Uzedy 

*Article ID: 46389544535572*

**Brand Name:** Uzedy

**Manufacturer:** Teva Pharmaceuticals

**Alt names:** Risperidone extended-release injectable suspension

**Use:** Long-acting atypical antipsychotic indicated for the treatment of schizophrenia in adults

**Specialty:** Psychiatry

**Process Type:** Rep request

**UNCONFIRMED PROCESS**

**Process:** Rep request form: <https://www.uzedyhcp.com/request-a-representative>

---

### Penaten Cream

*Article ID: 46389003500692*

**Brand Name:** Penaten Cream

**Manufacturer:** Kenvue

**Alt names:** Penaten Medicated Cream

**Use:** Topical zinc oxide cream for the prevention and treatment of diaper rash and minor skin irritations

**Specialty:** Pediatrics

**NOT CURRENTLY AVAILABLE FOR SAMPLES**

**Alternatives:** [Triple Paste](https://impiricussupport.zendesk.com/hc/en-us/articles/44953633240212), [Desitin](https://impiricussupport.zendesk.com/hc/en-us/articles/44953660225940)

---

### Invega

*Article ID: 46383628008980*

**Brand Name:** Invega

**Manufacturer:** Johnson & Johnson

**Alt names:** Paliperidone

**Use:** Atypical antipsychotic for the treatment of schizophrenia and schizoaffective disorder

**Specialty:** Psychiatry

**Process Type:** Samples and Rep 

For samples, HCP must register through the sample portal before ordering: [https://www.hcpsample.com/app/index.html?cc=hcpsample&roomid=24](https://www.hcpsample.com/app/index.html?cc=hcpsample&roomid=24)

For a rep, contact Johnson & Johnson to see if they can import the provider into their system to find a rep.

HCP page: <https://www.invegasustennahcp.com/>

---

### Uzedy

*Article ID: 46383230586004*

**Brand Name:** Uzedy

**Manufacturer:** Teva Pharmaceuticals

**Alt names:** Risperidone extended-release injectable suspension

**Use:** Long-acting injectable atypical antipsychotic for the treatment of schizophrenia

**Specialty:** Psychiatry

**UNCONFIRMED PROCESS**

Rep request form: [https://www.uzedyhcp.com/request-a-representative](https://www.uzedyhcp.com/request-a-representative)

---

### Enluxtra

*Article ID: 46293508166548*

**Brand Name:** Enluxtra

**Manufacturer** : OSNovative Systems, Inc

**Use:** wound care, management of pressure ulcers

**Process Type:** samples

**Timeline** : 2-3 weeks

**Process** : 

  1. Gather HCP Information including Provider name and credentials, NPI number, Practice name and address

  2. Complete the form here: <https://www.enluxtra.com/free-samples1.html>

  3. Follow Up: If needed, follow up via email at [support@osnovative.com](mailto:support@osnovative.com)[](mailto:support@osnovative.com) and [contact@osnovative.com](mailto:contact@osnovative.com)[](mailto:contact@osnovative.com).

  4. Receive Tracking Information: after the request is processed, you will receive tracking details to monitor shipment.

---

### Praluent

*Article ID: 46284137603092*

**Brand Name:** Praluent

**Manufacturer:** Regeneron Pharmaceuticals / Sanofi

**Alt names:** Alirocumab

**Use:** PCSK9 inhibitor indicated for the treatment of hyperlipidemia to reduce LDL cholesterol; used in patients with atherosclerotic cardiovascular disease or familial hypercholesterolemia

**Specialty:** Cardiology

**SAMPLE PROGRAM HAS ENDED**

**Process:** Rep visit (unconfirmed) 

  1. Call MyPraulent at [844-772-5836](tel:8447725836) then select option 1
  2. Rep can provide details about financial assistant program for eligible patients
  3. Rep visit requests may take 2-3 business days

---

### AeroChamber

*Article ID: 46248643974036*

**Brand Name:** AeroChamber

**Manufacturer:** Monaghan Medical Corporation (Trudell Medical International)

**Alt names:** AeroChamber Plus; AeroChamber Plus Flow-Vu; AeroChamber MV

**Use:** Valved holding chamber (spacer) used with metered-dose inhalers to improve medication delivery to the lungs and reduce oropharyngeal deposition.

**Specialty:** Pulmonology / Allergy & Immunology

**Process Type:****** Device trainer sample

**Timeline:****** 1-2 weeks

**Process:**

  1. Call Monaghan Medical at [800-833-9653 ](tel:8008339653)to inquire about trainer sample availability

  2. Customer service rep will provide the assigned territory manager’s contact information

  3. Email the assigned rep directly regarding samples 

  4. Customer service rep will process shipment and provide a FedEx tracking link




For any additional questions: [customerservice@monaghanmed.com](mailto:customerservice@monaghanmed.com).

---

### Cobenfy

*Article ID: 46224924790292*

**Brand Name:****** Cobenfy

**Manufacturer** : Bristol Myers Squibb (BMS)

**Alternative Names** : Xanomeline tartrate and trospium chloride

**Use:** Treatment of schizophrenia in adults

**Process Type:** samples

**UNCONFIRMED PROCESS**

**Process** :

  1. Samples can be ordered here: <https://samples.cobenfyhcp.com/products>
  2. HCP will have to create a login and will be able to order samples directly from this site

---

### Kate Farms

*Article ID: 46222961095316*

**Brand Name:** Kate Farms

**Manufacturer** : Kate Farms

**Use:** Medical food for dietary management of patients with impaired digestion, malnutrition, or those requiring tube feeding, including conditions such as Failure to Thrive (FTT), Gastroparesis, Oncology-related weight loss, and GI food allergies (Dairy, Soy, Corn)

**Process Type:** samples

**UNCONFIRMED PROCESS**

**Process:**

  1. send form to HCP, may require signature
  2. Form here: <https://www.katefarmsmedical.com/samples/healthcare-professional-for-practice/>

---

### Forward Motion Custom Orthotics

*Article ID: 46222568220180*

**Brand Name:** Forward Motion Custom Orthotics

**Manufacturer** : Forward Motion

**Use:** support, align, or improve the function of the foot, Plantar Fasciitis, Gait Abnormalities, Overpronation/Supination

**Specialty** : Orthopedics

**Process Type:** Samples

**Process:**

  1. Collect HCP Practice Information including Practice Name and Practice Address

  2. Submit the request via the Forward Motion contact form: <https://www.fdmotion.com/contact-us>

  3. A sales representative will contact the practice via phone, you may also request to communicate via email if preferred.

  4. Follow Up Multiple follow-ups may be required until the samples are shipped and delivered.

---

### Alvesco

*Article ID: 46222385485460*

**Brand Name:** Alvesco

**Manufacturer** : Covis Pharma (Current); originally developed by Nycomed/Aventis.

**Alt names:** Ciclesonide

**Use:** Asthma

**Specialty** : Pulmonology

**Process Type:** Samples

**UNCONFIRMED PROCESS**

**Process:**

  1. Sent form to HCP, requires signature
  2. form: <https://www.alvesco.com/hcp/order-samples>

---

### Humalog

*Article ID: 46222206842900*

**Brand Name:** Humalog

**Manufacturer:** Eli Lilly

**Alt Names: i** nsulin lispro

**Use:** Type 1 and type 2 diabetes

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**[](https://twitter.com/share?lang=en&text=Vyvanse&url=https%3A%2F%2Fimpiricussupport.zendesk.com%2Fhc%2Fen-us%2Farticles%2F46219541611668-Vyvanse)

---

### Lantus

*Article ID: 46220972407444*

**Brand Name:** Lantus

**Manufacturer** : Sanofi

**Alt names:** Insulin glargine

**Use:** glycemic control, blood sugar, type 1 and 2 diabetes

**Specialty** : Endocrinology

**Process Type:** Demo Kits

**SAMPLES NOT AVAILABLE, BUT WILL SEND OUT DEMO KITS**

**Portal Link:**<https://sanofisamplingportal-us.com/authentication/login>

**Alternate Process:**

  1. Gather HCP NPI
  2. Call Sanofi Sampling Portal at 800-973-3620
  3. The agent there will take the HCP's NPI and can let you know if they can order any demo kits, if they need to sign up, or if the Sampling Program can email them a form to sign up for sampling.
  4. If someone is already enrolled in the sampling program (if they have a login to the portal), we can ask the sampling portal agent to send a form to the HCP's email that the HCP can then fill out and fax/email back

---

### Lyrica

*Article ID: 46220287398932*

**Brand Name:** Lyrica

**Manufacturer:** Pfizer

**Alt Names:** Pregabalin

**Use:** neuralgia, neuropathy**,** nerve pain

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Zofran

*Article ID: 46219619993108*

**Brand Name:** Zofran

**Manufacturer:** Novartis

**Alt Names:** ondansetron, Zuplenz

**Use:** nausea and vomiting

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Zithromax

*Article ID: 46219579963540*

**Brand Name:** Zithromax

**Manufacturer:** Pfizer

**Alt Names:** antiobiotic

**Use:** treats bacterial infections

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Vyvanse

*Article ID: 46219541611668*

**Brand Name:** Vyvanse

**Manufacturer:** Takeda

**Alt Names:** Lisdexamfetamine

**Use:** ADHD

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Vivelle-dot

*Article ID: 46219487679124*

**Brand Name:** Vivelle-dot

**Manufacturer:** Novartis / Sandoz

**Alt Names:** Estradiol

**Use:** regulation of female reproductive cycles

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Viagra

*Article ID: 46219409212052*

**Brand Name:** Viagra

**Manufacturer:** Pfizer

**Alt Names:** Cialis, sildenafil, tadalafil

**Use:** treatment for erectile dysfunction

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Trijardy

*Article ID: 46219401811220*

**Brand Name:** Trijardy

**Manufacturer:** Boehringer Ingelheim

**Alt Names:** empagliflozin/linagliptin/metformin HCI

**Use:** type 2 diabetes

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Tri-luma

*Article ID: 46219352625172*

**Brand Name:** Tri-luma

**Manufacturer:** Galderma

**Alt Names:** fluocinolone + hydroquinone + tretinoin

**Use:** melasma

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Tretinoin

*Article ID: 46219270743444*

**Brand Name:** Tretinoin

**Manufacturer:** Ortho Dermatologics (Bausch Health)

**Alt Names:** Retin-A

**Use:** acne

**Notes:** Unavalable for sampling, [Altreno](https://impiricussupport.zendesk.com/hc/en-us/articles/46065960688148) may be an alternative.

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Tresiba Flexpen

*Article ID: 46219173435668*

**Brand Name:** Tresiba Flexpen

**Manufacturer:** Novo Nordisk

**Alt Names:** insulin degludec

**Use:** type 1 and type 2 diabetes

**Notes: S** ample program stopped in December 2024. 

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Systane

*Article ID: 46218922411796*

**Brand Name:** Systane

**Manufacturer:** Alcon

**Use:** lubricant eye drops

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Impoyz

*Article ID: 46218724416788*

**Brand Name:** Impoyz****

**Manufacturer** : Primus Pharmaceuticals, Inc. (Initial approval by Dr. Reddy's Laboratories)

**Alt names:** Clobetasol propionate

**Use:** Topical steroid (corticosteroid) indicated for the treatment of moderate to severe plaque psoriasis in adults

**Specialty** : Dermatology

**Process Type:** Samples

**Process:**

1\. Send form to HCP, brings HCP to a DocuSign form that they need to sign for samples

2\. To access form: 

  * go to <https://impoyz.com/>
  * Click "Access"
  * Fill out form
  * Request Samples



3\. HCP should receive updates as they will likely fill out with their own information

---

### Synjardy

*Article ID: 46218627332500*

**Brand Name:** Synjardy

**Manufacturer:** Boehringer Ingelheim

**Alt Names:** empagliflozin/metformin HCI

**Use:** type 2 diabetes

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Sudafed

*Article ID: 46218517697300*

**Brand Name:** Sudafed

**Manufacturer:** Johnson & Johnson

**Alt Names:** pseudoephedrine

**Use:** nasal decongestant

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Solu-Medrol

*Article ID: 46218487174804*

**Brand Name:** Solu-Medrol

**Manufacturer:** Pfizer

**Alt Names:** IV/IM Methylprednisolone

**Use:** IV/IM Steroids

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Silenor

*Article ID: 46218377386388*

**Brand Name:** Silenor

**Manufacturer:** Currax Pharmaceuticals

**Alt Names:** doxepin hydrochloride, tricyclic antidepressant 

**Use:** insomnia 

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Rozerem

*Article ID: 46218346115988*

**Brand Name:** Rozerem

**Manufacturer:** Takeda Pharmaceuticals

**Alt Names:** ramelteon

**Use:** insomnia

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Rogaine

*Article ID: 46218272398996*

**Brand Name:** Rogaine

**Manufacturer:** Johnson & Johnson

**Alt Names:** minoxidil

**Use:** increases new hair growth in cases of hereditary hair loss

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Protopic

*Article ID: 46217699144468*

**Brand Name:** Protopic

**Manufacturer:** Astellas Pharma

**Alt Names:** tacrolimus

**Use:** eczema

**Notes:** Protopic Ointment is no longer available in the US, as this product has been discontinued and is no longer on the market. 

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Myrbetriq

*Article ID: 46217622252308*

**Brand Name:** Myrbetriq

**Manufacturer:** Astellas Pharma

**Alt Names:** Mirabegron

**Use:** Overactive Bladder

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Multaq

*Article ID: 46217597933460*

**Brand Name:** Multaq

**Manufacturer** : Sanofi

**Alt Names:** dronaderone

**Specialty** : Cardiology

**Uses:** heart disease, reduce the risk of hospitalization for atrial fibrillation (AFib) 

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Motegrity

*Article ID: 46217564621204*

**Brand Name:** Motegrity

**Manufacturer:** Takeda Pharmaceuticals

**Alt Names:** prucalopride

**Use:** chronic idiopathic constipation (CIC)

**Notes: S** ample program ended on June 30, 2025

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Lunesta

*Article ID: 46216980192532*

**Brand Name:** Lunesta

**Manufacturer:** Sunovion Pharmaceuticals

**Alt Names:** eszopiclone

**Use:** controlled substance; treatment for insomnia

**Alternatives:**[Dayvigo](https://impiricussupport.zendesk.com/hc/en-us/articles/43406511811988), [Quviviq](https://impiricussupport.zendesk.com/hc/en-us/articles/46616984304020)

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Incruse Ellipta

*Article ID: 46216898216596*

**Brand Name:** Incruse Ellipta

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt Names:** Umeclidinium inhalation powder (LAMA – long-acting muscarinic antagonist)

**Use:** Once-daily maintenance treatment of chronic obstructive pulmonary disease (COPD) (not a rescue inhaler)

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Imitrex

*Article ID: 46215462726548*

**Brand Name:** Imitrex

**Manufacturer:** GlaxoSmithKline

**Alt Names:** Sumatriptan

**Use:** Migraines

**Alternative Medications** : We can offer [Ubrelvy](https://impiricussupport.zendesk.com/hc/en-us/articles/42585289203604) and [Emgality](https://impiricussupport.zendesk.com/hc/en-us/articles/44948682205972) as alternatives

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Flonase

*Article ID: 46215385643796*

**Brand Name:** Flonase

**Manufacturer:** GlaxoSmithKline

**Alt Names:** Fluticasone propionate nasal spray

**Use:** seasonal allergies

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Finasteride

*Article ID: 46215306696724*

**Brand Name:** Finasteride

**Manufacturer:** Merck

**Alt Names:** Propecia, Proscar

**Use:** treats BPH and male pattern hair loss

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

###  Emend

*Article ID: 46215271060500*

**Brand Name:** Emend

**Manufacturer:** Merck

**Alt Names:** aprepitant

**Use:** nausea & vomiting prevention

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Edarbyclor

*Article ID: 46215156518292*

**Brand Name:** Edarbyclor

**Manufacturer:** Azurity Pharmaceuticals

**Alt Names:** Azilsartan Medoxomil/Chlorthalidone

**Use:** high blood pressure

**Notes:** "Azurity no longer offers samples of Edarbyclor but does still offer other valuable patient resources. Please visit <https://azuritysolutions.com/hcp/> for more information"

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Edarbi

*Article ID: 46215143858196*

**Brand Name:** Edarbi

**Manufacturer:** Azurity Pharmaceuticals

**Alt Names:** Azilsartan Medoxomil

**Use:** high blood pressure

**Notes:** "Azurity no longer offers samples of Edarbi but does still offer other valuable patient resources. Please visit <https://azuritysolutions.com/hcp/> for more information"

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Dotti

*Article ID: 46215002140436*

**Brand Name:** Dotti

**Manufacturer:** Amneal Pharmaceuticals

**Alt Names:** Transdermal estradiol system

**Use:** help reduce symptoms of menopause

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Crestor

*Article ID: 46214862517908*

**Brand Name:** Crestor

**Manufacturer:** AstraZeneca

**Alt Names:** Rosuvastatin

**Use:** used to prevent cardiovascular disease in those at high risk and treat abnormal lipids

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Ciprodex

*Article ID: 46214420639508*

**Brand Name:** Ciprodex

**Manufacturer:** Alcon (Novartis)

**Alt Names:** ciprofloxacin and dexamethasone

**Use:** swimmers ear (acute oitis externa), middle ear infection (acute oitis media)

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Bystolic

*Article ID: 46214089467156*

**Brand Name:** Bystolic

**Manufacturer:** Allergan

**Alt Names:** Nebivolol

**Use:** Novel beta blocker for hypertension

**Notes:** Savings card available here: <https://bystolic.copaysavingsprogram.com/enroll>

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Breo Ellipta

*Article ID: 46214008586900*

**Brand Name:** Breo Ellipta

**Manufacturer:** GlaxoSmithKline

**Alt names:** Fluticasone furoate / Vilanterol

**Use:** used long term to prevent and control symptoms of asthma for better breathing and to prevent symptoms such as wheezing.

**Specialty:** Pulmonology / Allergy & Immunology

**Notes:**<https://hcp-account.gskpro.com/en-XG/login?ref=gskpro>

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Augmentin

*Article ID: 46213819068308*

**Brand Name:** Augmentin

**Manufacturer:** GlaxoSmithKline

**Alt names:** Amox-Clav

**Use:** combination antibiotic (combines amoxicillin and clavulanic acid), treats bacterial infections

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Anusol HC

*Article ID: 46213686458900*

**Brand Name:** Anusol HC

**Manufacturer:** Church & Dwight

**Alt names:** Anusol-HC, Proctosedyl, Uniroid, Xyloproct

**Use:** minor pain, itching, swelling, and discomfort caused by hemorrhoids and other problems of the anal area

**Specialty:** Gastroenterology / Proctology

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Amoxil

*Article ID: 46212720344724*

**Brand Name:** Amoxil

**Manufacturer:** GlaxoSmithKline (GSK)

**Alt names:** amoxicillin

**Use:** penicillin antibiotic

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Alphagan

*Article ID: 46210943014932*

**Brand Name:** Alphagan

**Manufacturer:** Allergan (AbbVie)

**Alt names:** Brimonidine tartrate ophthalmic solution, Alphagan P

**Use:** Reduction of elevated intraocular pressure in patients with open-angle glaucoma or ocular hypertension

**Specialty:** Ophthalmology

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Zirgan

*Article ID: 46209388225684*

**Brand Name:** Zirgan

**Manufacturer** : Bausch + Lomb (Initially Sirion Therapeutics)

**Alt names:** Ganciclovir

**Use:** dendritic ulcers

**Specialty** : Ophthalmology, Optometry

**Process Type:** Samples

**UNCONFIRMED PROCESS**

**Portal Link:**<https://bauschlomb.mysamplecloset.com/login>

---

### Neffy

*Article ID: 46208479623572*

**Brand Name: Neffy**

**Manufacturer** : ARS Pharmaceuticals, Inc.

**Alt names:** Epinephrine nasal spray

**Use:** anaphylaxis, emergency allergic reactions

**Process Type:** Demo Kit, Rep Visit

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP information including Practice Address
  2. Fill out form here: <https://neffypro.com/sign-up/?demoDevices=true>



**OR**

  1. Email ARS Pharmaceuticals to request a rep or demo kit delivery: [arspharmasupport@knipper.com](mailto:arspharmasupport@knipper.com)
  2. This may be required if portal inquiry does not go through

---

### Neutrogena

*Article ID: 46207443136276*

**Brand Name:****** Neutrogena

**Manufacturer** : Kenvue, Johnson & Johnson

**Uses:** over-the-counter (OTC) skincare brand

**Portal Link:******<https://kenvuepro.com/en-us/login?redirect=%2Fsamples>

**Important Notes:** Kenvue may rotate out what products are available.

---

### NeilMed

*Article ID: 46205823276308*

**Brand Name:** NeilMed

**Manufacturer** : NeilMed

**Alt names:** NeilMed brand over-the-counter (OTC) nasal saline products and wound wash 

**Use:** Nasal decongestion, wound care

**Process Type:** Samples 

Process:

  1. Send form to HCP. Form is exetensive, with 37 listed products, as well as options for brochures, mailing lists, and a wholesale pricing list
  2. Form: <https://www.neilmed.com/usa/physician-sample-request-form/>

---

### Feosol

*Article ID: 46178560524564*

**Brand Name:** Feosol

**Manufacturer** : Vespyr Brands (formerly owned by GSK/SmithKline Beecham)

**Alt names:** Ferrous Sulfate

**Use:** Iron supplement for iron deficiency

**Process Type:** Samples 

**UNCONFIRMED PROCESS**

**Portal Link:**<https://doctorsamples.com/login.php>

This and other medications are available on this site: <https://doctorsamples.com/samples/>

Feosol-specific site: <https://doctorsamples.com/feosol-complete-iron-supplement-2ct-sample-kit-of-25/>

---

### Retatrutide

*Article ID: 46165995627156*

**Brand Name:** Retatrutide

**Manufacturer** : Eli Lilly

**Alt names:** LY3437943 (Not available on the market yet)

May also be referred to as a "GLP-3", though this is not an official designation

**NOT AVAILABLE ON THE MARKET YET NOT APPROVED**

**Alternatives to offer to HCP** : Ozempic, Wegovy, Mounjaro, Zepbound

---

### Valchlor

*Article ID: 46146965779220*

**Brand Name:****** Valchlor

**Manufacturer** : Helios Gtx

**Alt names:****** Mechlorethamine gel (0.016%)

**Use:** Topical treatment of Stage IA and IB mycosis fungoides-type cutaneous T-cell lymphoma

**Specialty** : Dermatology, Oncology

**Process Type:** Rep Request

**Process:**

  1. Gather HCP information including Specialty and Practice Address
  2. Fill out form on this site (click "request a rep" in top right): <https://www.valchlorhcp.com/>
  3. Keep HCP informed of any updates you receive

---

### Repatha

*Article ID: 46142747583124*

**Brand Name:** Repatha

**Manufacturer** : Amgen Inc.

**Alt names:** Evolocumab

**Use:** High cholesterol, Cardiovascular Risk Reduction

**Process Type:** Rep Visit

**Process:**

  1. Gather HCP information including Practice Address and Specialty
  2. Submit form here: <https://www.repathahcp.com/connect-with-a-rep>
  3. Keep HCP updated with any information you receive regarding their request

---

### Altreno

*Article ID: 46065960688148*

**Brand Name:** Altreno

**Manufacturer:** Ortho Dermatologics (a division of Bausch Health Companies Inc.)

**Alt names:** Tretinoin (0.05%)

**Use:** topical acne medication

**Specialty** : Dermatology

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Process:**

  1. Use the chat box feature on the Bausch Health website here: <https://www.bauschhealth.com/about-us/contact-us/>
  2. Request a rep to bring samples to the HCP.
  3. Follow up 5-7 days later with the HCP to confirm the rep has stopped by with samples.
  4. If the rep has not stopped by, can follow up with the chat and get an update and/or escalate the request.  




May also use Bausch and Lomb rep finder to locate a sales rep:  
<https://repfinder.bausch.com/>

---

### Udenyca

*Article ID: 46065789483796*

**Brand Name:** Udenyca

**Manufacturer:** Intas Pharmaceuticals (formerly owned by Coherus BioSciences, Inc.)

**Alt names:** Pegfilgrastim-cbqv

**Use:** Reduction of the risk of infection (febrile neutropenia) in patients receiving myelosuppressive chemotherapy, Acute Radiation Syndrome (ARS) to increase survival in patients acutely exposed to myelosuppressive doses of radiation

**Specialty:** Oncology / Hematology

**Process Type:** Rep Visit

**Process:**

  1. Gather HCP information such as Practice Name, Practice Address, and a Practice Email
  2. Submit rep request via form here: <https://www.udenyca.com/hcp/request-a-rep>

---

### Neulasta Onpro

*Article ID: 46065054968596*

**Brand Name:** Neulasta Onpro

**Manufacturer:** Amgen

**Alt names:** Pegfilgrastim On-body Injector

**Use:** Reduction of the risk of infection (febrile neutropenia) in patients receiving myelosuppressive chemotherapy

**Specialty:** Oncology / Hematology

**Process Type:****** Demo Kit Samples

**Notes:** No standalone Onpro training device and no Neulasta field representatives available.

**Portal Link:** Reusable Demo Kit along with other patient materials: <https://amgenhcpmaterials.com/neulastaonpro/items.sgi>

---

### Neuralli MP

*Article ID: 46052744579348*

**Brand Name:** Neuralli MP

**Manufacturer:** Bened Life

**Alternative name:** Lactobacillus plantarum PS128

**Use:** Dietary management of neurological and neuropsychiatric conditions associated with gut–brain axis and microbiome imbalance _(medical food intended for use under physician supervision)_

**Notes:** There are no sales reps and samples currently, but HCPs can sign up to be alerted of any updates, including if sales associate visits become available in the future.   
  
HCP Page : <https://benedlife.com/pages/hcp>

---

### Vyzulta

*Article ID: 46047659843732*

**Brand Name:** Vyzulta

**Manufacturer:** Bausch + Lomb

**Alt names:** Latanoprostene bunod

**Use:** Reduction of intraocular pressure in patients with open-angle glaucoma or ocular hypertension

**Specialty:** Ophthalmology 

**Process Type:****** Samples

**UNCONFIRMED PROCESS**

**Portal Link:**<https://bauschlomb.mysamplecloset.com/login>

---

### AmLactin

*Article ID: 46026987515540*

**Brand Name:** AmLactin

**Manufacturer:** Crown Laboratories

**Alt names:** Ammonium lactate 12%

**Use:** Topical keratolytic moisturizer 

**Specialty:** Dermatology / Podiatry

**Process Type:** Samples

**Timeline:** 4–6 weeks for processing and delivery

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP Information (Name, NPI, practice name & address)
  2. Submit Sample Request at <https://amlactin.com/pages/healthcare-professionals>
  3. Allow 4–6 weeks for processing and delivery
  4. Follow-Up (if needed):  
Call: [(800) 345-0032](tel:8003450032)  
Email: [advanticehealth@emersongroup.com](mailto:advanticehealth@emersongroup.com)

---

### Furoscix

*Article ID: 46026886202644*

**Brand Name:** Furoscix

**Manufacturer** : scPharmaceuticals, Inc.

**Alt names:** Furosemide (subcutaneous)

**Use:** Treatment of edema in adults (and pediatrics weight more than 43 kgs) with chronic heart failure or chronic kidney disease (CKD)

**Process Type:** samples and rep

**Timeline:** 1-2 weeks

**Process:**

  1. Gather HCP NPI, Practice Address, Specialty
  2. Fill out form here: <https://www.furoscix.com/hcp/contact-us>
  3. Rep will reach out to communicate if they are able to provide samples to the HCP
  4. Communicate with HCP if they need to coordinate a meeting (physical or virtual)

---

### Juvéderm

*Article ID: 46026293432980*

**Brand Name:** JUVÉDERM

**Manufacturer:** Allergan Aesthetics (an AbbVie company)

**Use:** Injectable hyaluronic acid dermal filler 

**Specialty:** Dermatology / Plastic Surgery / Aesthetic Medicine

**Process Type:** Samples

**UNCONFIRMED PROCESS**

**Process:**

HCPs can create an account by calling 844-639-2246 and requesting samples/reps afterwards.

---

### McKesson Lesion Measuring Rulers/Wound Care Products

*Article ID: 46024140059028*

**Brand Name:** Lesion Measuring Rulers, wound care products

**Manufacturer:** McKesson

**Alt names:****** Wound Care, Lesion Measuring Rulers

**Process Type:****** Samples

**Notes:********Samples availability varies******

**Process:**

  1. Gather HCP information including Practice Name and Practice Address
  2. Fill out this form here and in the "Message" section, ask if samples of products are available <https://mms.mckesson.com/content/contact-us/>
  3. Someone may reach out after about a week
  4. They do not usually do samples, but we can also connect them to the HCP directly

---

### Wegovy Tablets

*Article ID: 45985235584404*

**Brand Name:** Wegovy

**Manufacturer:** Novo Nordisk

**Alt names:** Semaglutide

**Use:** GLP-1 receptor agonist for weight loss, cardiovascular risk reduction

**Process Type:****** Samples

**Note:** Novo Nordisk protocols require that sample requests for Wegovy tablets be handled through a sales representative who can provide the samples and any additional information needed.

**Process:**

  1. Call Novo Nordisk at 800-727-6500
  2. Obtain Novo Nordisk sales rep contact information 
  3. Pass sales rep contact info to HCP



**Alternative:** Portal for Injectable form of Wegovy can be found here: [https://www.novomedlink.com/obesity/samples.html](https://www.novomedlink.com/obesity/samples.html)

---

### Visbiome

*Article ID: 45913734677396*

**Brand Name:** Visbiome

**Manufacturer:** Exegi Pharma

**Use:** Oral probiotic used for digestive health support

**Specialty:** Gastroenterology

**Process Type:** Samples

**Note:****Online sample request form requires HCP signature**. 

HCP can fill out a sample request form here: <https://www.visbiome.com/pages/request-a-visbiome-sample>

---

### PluroGel 

*Article ID: 45834263128596*

**Brand Name:** PluroGel

**Manufacturer:** Medline Industries, Inc. 

**Alt names:** Hydrogel wound and burn dressing (surfactant gel) 

**Use:** Wound and burn care 

**Specialty:** Wound Care / Plastic Surgery / General Surgery / Dermatology

**Process Type:****** Samples

**Notes:** Medline customer service: [1-800-633-5463](tel:18006335463)

**Process:**

  1. HCP must create a Medline business account: <https://www.medline.com/account/signup/signup.jsp?fromPage=/account/login.jsp>
  2. HCP can then request samples via Medline's online form: <https://www.medline.com/skin-health/plurogel/>

---

### Inpefa

*Article ID: 45790875367572*

**Brand Name:** Inpefa

**Manufacturer:** Lexicon Pharmaceuticals, Inc.

**Alt names:** Sotagliflozin (SGLT1/SGLT2 inhibitor)

**Use:** Heart failure, type 2 diabetes, chronic kidney disease 

**Specialty:** Cardiology / Endocrinology

**Process Type:** Samples

**Portal Link:**<https://lexicon.mysamplecloset.com/login>›

---

### Myfembree

*Article ID: 45764406189972*

**Brand Name** : Myfembree

**Manufacturer** : Myovant Sciences GmbH (subsidiary of Sumitomo Pharma)

**Alternative Name** : Relugolix, Estradiol, and Norethindrone Acetate

**Uses** : Management of heavy menstrual bleeding associated with uterine leiomyomas (fibroids) and moderate to severe pain associated with endometriosis in premenopausal women

**Specialty** : OB/GYN, OBGYN, Gynecology

**Process Type** : Rep visit

**Process** :

  1. Gather HCP information such as Practice Address and Specialty
  2. Fill out rep request form here: <https://www.myfembreehcp.com/request-rep/>
  3. Follow up with a call to Sumitomo Pharma at [800-739-0565](tel:8007390565)

---

### Ajovy

*Article ID: 45754763913236*

**Brand Name:****** Ajovy

**Manufacturer** : Teva Pharmaceuticals

**Alt Names:** fremanezumab-vfrm

**Uses:****** Preventive treatment of migraine in adults.

**Specialty** : Neurology

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP information including HCP name, practice info, state license and NPI
  2. Call Teva’s Physician Support Line at [877-867-3034](tel:8778673034)
  3. Teva should locate a local AJOVY sales rep who will reach out directly to coordinate samples
  4. Notify HCP of any updates you receive
  5. Check back with HCP every 5-7 days to confirm receipt

---

### Performance Orthotic Laboratories

*Article ID: 45753038188436*

**Manufacturer:** Performance Orthotic Laboratories

**Additional Info** : Class I Medical Device Manufacturer Custom-made orthotic devices

**Use** : Custom-made foot and ankle orthotics

**Request Type** : Samples

**Timeline** : 1-2 weeks

**Process** : 

  1. Gather HCP information including Practice Name, Practice Address, Practice Email, and Practice Phone number
  2. Fill out form here: <https://www.performlab.com/sample-box-form/>
  3. Once submitted, a representative will reach out via email to coordinate the request.

---

### Dermabond

*Article ID: 45752811170324*

**Brand name** : Dermabond

**Manufacturer** : Ethicon, Inc (Johnson & Johnson)

**Alternative Name** : 2-Octyl Cyanoacrylate

**Uses** : used to help keep lacerations and incisions closed after minimally invasive surgery or minor lacerations

**Request Type** : Rep request

**Process** : 

  1. Gather HCP information including Practice name, Specialty, and which product HCP is interested in from dropdown list 
  2. Fill out and submit form here: <https://cloud.info.ethicon.com/contact-rep>
  3. Keep HCP informed with any updates you receive

---

### Solu-Medrol

*Article ID: 45751855890964*

**Brand Name:** Solu-Medrol

**Alt Names:** Methylprednisolone 

**Use:** injectable steroid

**Notes:****Does not offer samples**

**NOT AVAILABLE**

---

### Liquid IV

*Article ID: 45552278905236*

**Brand Name:** Liquid IV

**Uses:** hydration powder packets

**DOES NOT OFFER SAMPLES**

---

### Tymlos

*Article ID: 45551331850772*

**Brand Name:** Tymlos

**Manufacturer** : Radius Health, Inc.

**Alt Names:** Abaloparatide

**Uses:** Osteoporosis

**Specialty** : Endocrinology, Rheumatology

**Process:**

  1. Gather HCP information (Practice name and location, state license #) 
  2. Fill out form here: <https://tymlos.com/hcp/request-support/#>
  3. A Radius Health representative will reach out and send a sample request form that requires the HCP’s signature
  4. Forward the form to the HCP for signature and instruct them to fax the completed form back to Radius Health at 1-844-854-4177
  5. Check back with HCP every 5-7 days to confirm receipt

---

### Sympazan

*Article ID: 45551187991316*

**Brand Name:** Sympazan

**Manufacturer** : Aquestive Therapeutics, Inc. (Commercialized with Assertio)

**Alt Names:** Clobazam oral film

**Uses:** seizures associated with Lennox-Gastaut Syndrome (LGS)

**Specialty** : Neurology

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP information (Practe Name, Practice Address)
  2. Fill out form here: <https://www.sympazan.com/hcp/request-a-representative/>
  3. Notify HCP of any updates you receive
  4. Check back with HCP every 5-7 days to confirm receipt

---

### Roveldon

*Article ID: 45551174482324*

**Brand Name:** Roveldon

**Manufacturer** : Spectrum Pharmaceuticals, Inc. (now a subsidiary of Assertio Holdings)

**Alt Names:** eflapegrastim-xnst

**Uses:** prevention of chemotherapy-induced febrile neutropenia

**Specialty** : Oncology, Hematology

**UNCONFIRMED PROCESS**

**Process:**

  1. Gather HCP Practice Address
  2. Fill out form on this site (must click "request a rep" in top right): <https://www.rolvedon.com/>
  3. Notify HCP of any updates you receive
  4. Check back with HCP every 5-7 days to confirm receipt

---

### Journay PM

*Article ID: 45550897301396*

**Brand Name:** Journay PM

**Manufacturer** : Ironshore Pharmaceuticals

**Alt Names:** methylphenidate

**Uses:** attention deficit hyperactivity disorder (ADHD)

**UNCONFIRMED PROCESS**

**REP ONLY no samples**

**Process:**

  1. Gather HCP information including Name, Specialty, Zip Code, Email
  2. Submit information here to submit for a rep visit: <https://www.jornaypm-pro.com/sign-up>

---

### Glyxambi

*Article ID: 45550816522644*

**Brand Name:** Glyxambi

**Manufacturer** : Boehringer Ingelheim and Eli Lilly

**Alt Names:** Empagliflozin/Linagliptin

**Uses:** SLGT2 inhibitor and DPP-4 inhibitor for type 2 diabetes, cardiovascular risk reduction

**Specialty** : Endocrinology

**UNCONFIRMED PROCESS**

**Portal Link:**<https://www.bisamplecenter.com/>

---

### Emergen C

*Article ID: 45550779708308*

**Brand Name:** Emergen C

**Manufacturer** : Haleon

**Alt Names:** Emergen-C

**Uses:** over-the-counter (otc) cold prevention

**Link:** Possibly available through the Haleon Health portal, though samples may vary  
  
<https://www.haleonhealthpartner.com/en-us/samples/>

---

### Entresto

*Article ID: 45483238333716*

**Brand Name** : Entresto

**Manufacturer** : Novartis Pharmaceuticals Corporation

**Alt Names** : sacubitril / valsartan combination tablet

**Use** : Heart Failure

**Specialty** : Cardiology

**NOT CURRENTLY AVAILABLE FOR SAMPLES OR REPS**

---

### Atrantil

*Article ID: 45341274294420*

**Brand Name** : Atrantil

**Manufacturer** : KBS Research, LLC

**Alternative names:** Quebracho colorado extract (heartwood) / Horse Chestnut extract / Peppermint extract

**Use:** Bloating, abdominal discomfort, changes in bowel habits

**Process Type:** Samples****

**Process:**

  1. Submit Request:  
Atrantil: Sample Request Form: [https://atrantil.com/sample-requests/](https://atrantil.com/sample-requests/)  

  2. Manufacturer Contact:  
The representative will reach out via email after the request is submitted.
  3. Follow-Up:  
You may follow up via email to request tracking information once the samples have been shipped.

---

### Suggestions by Specialty

*Article ID: 45265653187860*

You can use this table to make recommendations or suggestions on products that HCPs may be interested in & eligible for based on their specialty area. 

Specialty | Product Names  
---|---  
PCP  
Also include: Family Med, RN, Internal Med, NP, PA, Emergency Med, Acute Care |  Xarelto  
Toujeo  
Sunosi  
Symbravo  
Auvelity  
Ozempic  
Advil  
Dexcom G7  
Trelegy Ellipta "Vitamin and Supplement Resources" article  
Other / Unknown  
(not included in other listed specialties) |  Xarelto  
Toujeo  
Sunosi  
Symbravo  
Auvelity  
Linzess  
Ozempic  
Dexcom G7  
Trelegy Ellipta "Vitamin and Supplement Resources" article  
Psychiatry |  Sunosi   
Auvelity  
Vraylar  
Rexulti  
Qelbree  
Journavx  
Dermatology |  Cabtreo  
Vanicream  
Ebglyss  
Litfulo  
Rinvoq  
Jublia  
Eucrisa "Skincare Resources" article  
Pediatrics |  Toujeo  
Dexcom G7  
Qelbree  
Eucrisa  
Oxtellar XR  
Vanicream "Pediatrics Product Resources" article  
Optometry / Opthamology | Upneeq  
Vevye  
Miebo  
Optase  
Lumify  
Obstetrics & Gynocology |  Orilissa  
Veozah  
Equelle  
ACCRUFeR  
Gemtesa "Women's Health Resources" article  
Neurology  
Also: Vascular Neurology, Neurosurgery |  Symbravo  
Sunosi  
Xarelto  
Nurtec ODT  
Ubrelvy  
Emgality  
Oxtellar XR  
Oncology / Hematology |  Xarelto  
Xtandi  
Zejula  
Eliquis  
Cardiology |  Xarelto  
Eliquis  
Farxiga  
Verquvo  
Dentistry | Lubricity (dry mouth)  
Allergist/Allergy |   
Gastroenterology |   
|

---

### Nexletol

*Article ID: 45263558294292*

**Brand Names** : Nexletol

**Manufacturer** : Esperion Therapeutics, inc

**Alt Names** : Bempedoic acid

**Uses** : high cholesterol, cardiovascular risk reduction

**Specialty** : Cardiology, Endocrinology

**UNCONFIRMED PROCESS**

**Process** :

  1. Gather required information such as Specialty, Practice address, Practice Fax number, State License Number
  2. Fill in form here [https://www.nexlizethcp.com/sample-request/](https://www.nexlizethcp.com/sample-request/)



**Alternate Process** : May need to submit this form as well to make sure you are connected: [https://www.esperion.com/contact-us](https://www.esperion.com/contact-us)

---

### Nexlizet

*Article ID: 45263532749332*

**Brand Names** : Nexlizet

**Manufacturer** : Esperion Therapeutics, inc

**Alt Names** : Bempedoic acid / Ezetimibe

**Uses** : high cholesterol, cardiovascular risk reduction

**Specialty** : Cardiology, Endocrinology

**UNCONFIRMED PROCESS**

**Process** :

  1. Gather required information such as Specialty, Practice address, Practice Fax number, State License Number
  2. Fill in form here [https://www.nexlizethcp.com/sample-request/](https://www.nexlizethcp.com/sample-request/)



**Alternate Process** : May need to submit this form as well to make sure you are connected: [https://www.esperion.com/contact-us](https://www.esperion.com/contact-us)

---

### FreshKote Eye Drops

*Article ID: 44953819883796*

**Brand Name:** FreshKote Eye Drops

**Manufacturer** : Harrow Eye, LLC

**Alt Names:** N/A

**Uses:** Dry Eyes

**UNCONFIRMED PROCESS**

**Portal Link:**<https://www.freshkotepf.com/files/FRESHKOTE-PF-Order-Form.pdf>

---

### Astepro

*Article ID: 44953817362068*

**Brand Name:** Astepro

**Manufacturer** : Bayer Healthcare

**Alt Names:** Azelastine

**Uses:** Allergic Rhinitis, non-allergic Rhinitis, Vasomotor Rhinitis

**UNCONFIRMED PROCESS**

**Portal Link:**<https://pro.bayer.com/astepro#order>

---

### Combipatch

*Article ID: 44953802684948*

**Brand Name:** Combipatch

**Manufacturer** : Noven Pharmaceuticals, Inc.

**Alt Names:** Estradiol / Norethindrone

**Uses:** Hormone replacement therapy for menopause symptoms and osteoporosis prevention

**Specialty** : OB/GYN, OBGYN, Gynecology

**UNCONFIRMED PROCESS**

**Form:**<https://combipatch.com/wp-content/uploads/2023/07/CBP-2707-16-WEB-Jun23_CombiPatch-Sample-Request-Form.pdf>

---

### Climara Pro

*Article ID: 44953790652308*

**Brand Name:** Climara Pro

**Manufacturer** : Bayer HealthCare Pharmaceuticals Inc.

**Alt Names:** Estradiol and Levonorgestrel

**Uses:** treatment of vasomotor symptoms associated with menopause, prevention of postmenopausal osteoporosis

**Specialty** : OB/GYN, OBGYN, Gynecology

**UNCONFIRMED PROCESS**

**Portal Link:**<https://pharmasamples.bayer.com/login>

**Alternative Link:**<https://hcp.climarapro.com/>

---

### Duavee

*Article ID: 44953666238996*

**Brand Name:** Duavee

**Manufacturer** : Pfizer

**Alt Names:** Conjugated Estrogens and Bazedoxifene

**Uses:** treatment of vasomotor symptoms associated with menopause, prevention of postmenopausal osteoporosis

**Specialty** : OB/GYN, OBGYN, Gynecology

**UNCONFIRMED PROCESS**

**Portal Link:**<https://duavee.pfizerpro.com/request-samples>

**Alternative** : may also call 1-800-505-4426 and ask if they have samples/ or a rep

---

### Desitin

*Article ID: 44953660225940*

**Brand Name:** Desitin

**Manufacturer** : Johnson & Johnson 

**Alt Names:** Zinc Oxide Paste

**Uses:** Diaper rash

**UNCONFIRMED PROCESS**

**Portal Link:**<https://kenvuepro.com/en-us/login?redirect=%2Fsamples>

---

### Triple Paste

*Article ID: 44953633240212*

**Brand Name:** Triple Paste

**Manufacturer** : Advantice Health, LLC

**Alt Names:** Zinc Oxide Paste

**Uses:** Diaper rash

**UNCONFIRMED PROCESS**

**Process:** Fill out form here with HCP name, NPI, and email address:****<https://triplepaste.com/pages/hcp>

---

### Viibryd

*Article ID: 44953627361812*

**Brand Name:** Viibryd

Manufacturer: 

**Alt Names:** Vilazodone

**Uses:** Treat depression

**Important Notes:****Savings card only. No samples provided on this site**

**Resources Link:** <https://www.abbvieaccess.com/brand/viibryd>

---

### Teflaro

*Article ID: 44953583992852*

**Brand Name:** Teflaro

**Manufacturer** : Abbvie

**Alt Names:** ceftaroline fosamil

**Uses:** bacterial infections, IV antibiotic

**Portal Link:** Rep visit

**Important Notes:****Unconfirmed Process** Goes to "request a rep", **does not offer samples**

**Process** : Request a representative here: <https://www.abbvieaccess.com/brand/teflaro>

---

### Emgality

*Article ID: 44948682205972*

**Brand Name:** Emgality

**Manufacturer** : Eli Lilly and Company

**Alternative Name** : Galcanezumab-gnlm

**Use** : Migraine Prevention, Cluster Headache

**Specialty** : Neurology

**Notes:** Eli Lilly no longer has sales reps for Emgality

**Unconfirmed process**

**Process:**

  1. Gather HCP information such as NPI
  2. Go here and select "Request Samples" or "Request Demo Kit" <https://emgality.lilly.com/hcp/savings-support/request-a-sample>
  3. Input HCP NPI to check availability



**Alternate links** : May fill out web form here with HCP information including practice address and specialty: <https://medical.lilly.com/us/products/contact/samples-and-sales-representative-request>

<https://prescriberpoint.com/emgality/samples>

---

### Auvelity

*Article ID: 44948312311188*

**Brand Name:** Auvelity

**Manufacturer** : Axsome Therapeutics

**Alt Names:** dextromethorphan/buproprion

**Uses:** antidepressant, treats MDD

**Specialty** : Psychiatry

**Unconfirmed Process**

**Portal Link:**<https://axsomehcpsamples.qpharmacorp.com/>

---

### Enfamil

*Article ID: 44942463882900*

**Brand Name** : Enfamil

**Manufacturer** : Mead Johnson Nutrition

**Use** : Infant formula

**Specialty** : Pediatrics, Family Medicine

**Process Type** : Samples

**Process** :

  1. Gather HCP information including Practice name and Practice Address
  2. Fill out form here: [https://hcp.meadjohnson.com/s/order-information](https://hcp.meadjohnson.com/s/order-information)

---

### Nexlizet

*Article ID: 44712376584596*

**Brand Name:** Nexlizet

**Manufacturer** : Esperion Therapeutics, Inc.

**Alt names:** Bempedoic acid and Ezetimibe

**Use:** High cholesterol

**Process Type:** samples

**Timeline:** ~3-4 weeks

**Process:**

  1. Gather HCP information - Specialty, office address, email address, fax number, state license number
  2. Submit form here: <http://nexlizethcp.com/sample-request/>

---

### True Metrix

*Article ID: 44710625347860*

**Brand name** : True Metrix

**Manufacturer** : Trividia Health

**Uses** : Diabetic testing supplies, test strips to test blood glucose levels

**Process Type:****** Samples

**Process** :

  1. Gather HCP information -- Practice Name, Practice Address
  2. email [cs@trividiahealth.com](mailto:cs@trividiahealth.com) letting them know you're looking for samples for an HCP
  3. A sales rep should get back to you in 1-2 Business Days

---

### Verquvo

*Article ID: 44709668511508*

**Brand Name:****** Verquvo

**Manufacturer** : Merck

**Alt Names:****** vericiguat

**Use:****** Heart Failure

**Specialty** : Cardiology

**Portal Link:** <https://www.mercksampleportal.com/?ref=mc>

---

### Tyblume

*Article ID: 44413302723348*

**Brand Name** : Tyblume

**Manufacturer** : Exeltis USA, Inc

**Alternative Name** : Levonorgestrel and Ethinyl Estradiol

**Use** : birth control (combination oral contraceptive)

**Specialty** : OB/GYN, Gynecology

**Process Type:** Samples

**Timeline** : 2 weeks

**Process** :

  1. Send Form to HCP: [https://](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[hcp](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[.t](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[y](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[b](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[l](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[u](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[me](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[.com/](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)[wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf](https://hcp.tyblume.com/wp-content/uploads/2024/03/Tyblume-Sample-Request-Form-Cardinal-1-1.pdf)
  2. HCP fills out form and sends back to:FAX: 614-652-8275 │ EMAIL: [ExeltisSamples@cardinalhealth.com](mailto:ExeltisSamples@cardinalhealth.com)
  3. Samples take about 2 weeks to process



Site for reference if the above link doesn't work: [https://hcp.tyblume.com/](https://hcp.tyblume.com/)

---

### Carpe

*Article ID: 44412776911124*

**Brand Name** : Carpe

**Uses** : Brand of over-the-counter skin care

**Process Type:** Samples

**Process** :

  1. gather HCP Name and Practice Address
  2. Request samples kit by emailing [davids@mycarpe.com](mailto:davids@mycarpe.com)
     1. Link to the site with this email here: <https://mycarpe.com/pages/dermatologists>
  3. Samples may only be available for dermatologists

---

### L'Oreal

*Article ID: 44412626802196*

**Brand name** : L'Oreal

**Alternate Name** : Loreal

**Manufacturer** : L'Oréal Groupe

**Uses** : brand of over-the-counter skincare

**Portal Link** : <https://www.lorealdermatologicalbeauty.com/account/login-page>

---

### Cetaphil

*Article ID: 44412486100756*

**Brand name** : Cetaphil

**Manufacturer** : Galderma

**Uses** : brand of over-the-counter moisturizers

**Portal Link** : <https://www.cetaphilprofessional.com/login/>

---

### Atrantil Pro

*Article ID: 44258104985364*

**Brand Name** : Atrantil Pro

**Manufacturer** : KBS Research

**Ingredients** : Quebracho colorado extract (heartwood) / Horse Chestnut extract / Peppermint extract + Proprietary Probiotic Blend (_Bacillus_)

**Use** : Bloating, abdominal discomfort, changes in bowel habits

**Process Type:** Samples

**Process** :

  1. Gather HCP Information
  2. Submit sample request here: <https://atrantil.com/hcp-pro/>
  3. The representative will reach out via email after the request is submitted.
  4. You may follow up via email to request tracking information once the samples have been shipped.

---

### Mucinex

*Article ID: 44217864442388*

**Brand Name:** Mucinex

**Manufacturer** : Reckitt Benckiser Group

**Alt Names:** Guaifenesin

**Use:** over-the-counter (OTC) for cough

**Portal Link:**<https://www.rbhcprofessional.com/s/resource-center?brand=MUCINEX>

---

### Aquaphor

*Article ID: 44213779455124*

**Brand Name:** Aquaphor

**Manufacturer** : Beiersdorf AG

**Alt Names:** N/A

**Use:** brand of moisturizers

**Process type: Samples**

**Notes** : **Only available for Dermatology, Pediatrics, and Radiation Oncologists**  
  
**Process**

  1. Gather HCP Information
  2. Fill out form here with HCP information [https://bdf.hcpsampling.com/](https://bdf.hcpsampling.com/)

---

### Eucerin

*Article ID: 44213725397268*

**Brand Name:** Eucerin

**Manufacturer** : Beiersdorf AG

**Alt Names:** N/A

**Use:** brand of moisturizers

**Process type: Samples**

**Notes** : **Only available for Dermatology, Pediatrics, and Radiation Oncologists**  
  
**Process**

  1. Gather HCP Information
  2. Fill out form here with HCP information [https://bdf.hcpsampling.com/](https://bdf.hcpsampling.com/)

---

### Zelsumvi

*Article ID: 44185992981268*

**Brand Name:** Zelsumvi

**Manufacturer** : Ligand Pharmaceuticals, Pelthos Therapeutics

**Alt Names:** berdamizer topical gel

**Use:** treat molluscum contagiosum in adults and children 1 year of age and older

**Specialty** : Dermatology, Pediatrics

**Notes:****Item not available**

May contact Pelthos Therapeutics so see if they are available 1-855-330-7546

---

### Xigduo

*Article ID: 44185674803092*

**Brand Name:** Xigduo

**Manufacturer** : AstraZeneca

**Alt Names:** dapagliflozin and metformin

**Use:** diabetes medicine used, together with diet and exercise in adults with type 2 diabetes

**Notes:****Samples Unavailable****. Can offer Farxiga (Xigduo contains Farxiga)**

---

### Wynzora

*Article ID: 44185650881556*

**Brand Name:** Wynzora

**Manufacturer** : Mayne Pharma, MC2 Therapeutics

**Alt Name** : Calcipotriene/Betamethasone Dipropionate

**Uses** : Plaque psoriasis

**Specialty** : Dermatology

**Notes:****Samples and Reps unavailable**

Only has copay assistance: select "Savings Card" in upper right here:

<https://www.wynzora.com/patient-benefits/>

---

### Vyleesi

*Article ID: 44185498958996*

**Brand Name:** Vyleesi

**Manufacturer** : Cosette Pharmaceuticals

**Alt Names:** Bremelanotide

**Use:** treats low sex drive in women

**Specialty** : OB/GYN, Gynecology

**Notes:****Samples not available****, may speak with rep**

contact a rep here: <https://vyleesipro.com/request-a-rep>

---

### Tylenol

*Article ID: 44185445238292*

**Brand Name:** Tylenol

**Alt Names:** acetaminophen, paracetamol

**Use:** pain relief, fever reduction

**Notes: Temporarily out of stock**

**** 8/22 HCP noted Tylenol site has said out of stock for months  
8/25 Divine call with Manufacturer confirmed no availability  
ON 9/19 HCP noted there were no Tylenol samples available  
  
note: does not offer rep visits  
  
Portal link:  
[https://www.tylenolprofessional.com/login?redirect%3D%252Fsamples](https://www.tylenolprofessional.com/login?redirect%3D%252Fsamples)

---

### Stelo

*Article ID: 44185425138452*

**Brand Name:** Stelo

**Manufacturer:** DexCom, Inc

**Alt Names:** over-the-counter Continuous Glucose Monitor (GCM) for non-diabetics

**Use:** glucose monitoring

**Notes:****Samples unavailable****, but can get educational materials for patients**

Dexcom creates different glucose monitoring devices that they offer resources for (Stelo and G7). 

They DO offer samples of Dexcom G7. 

While these are both GCM devices, they serve different purposes and the HCP should be made aware of this. Anyone can use Stelo, but Dexcom G7 devices should only be used by those diagnosed with type 2 diabetes, and they usually will be taking insulin when using Dexcom G7.   


Can request resources here: <https://provider.dexcom.com/request-info>

---

### Skyrizi

*Article ID: 44185109074452*

**Brand Name:** Skyrizi

**Manufacturer** : Abbvie

**Alternative names** : Risankizumab-rzaa

**Uses:** monoclonal antibody used for the treatment of plaque psoriasis, Crohn's Disease, and Ulcerative Colitis

**Specialty** : Dermatology, Gastroenterology

**UNAVAILABLE FOR SAMPLES**

**Notes:** Rep request may be available here <https://www.skyrizihcp.com/gastroenterology/crohns-disease/contact-a-rep>

---

### Santyl

*Article ID: 44185056892564*

**Brand Name:** Santyl

**Alt Names:** Collagenase Ointment

**Use:** wound debridement, debridement of chronic skin ulcers, burned areas

**Notes:****Samples not offered.**

Can offer rep or savings options.

---

### Qsymia

*Article ID: 44184801257364*

**Brand Name:** Qsymia

**Alt Names:** phentermine and topiramate

**Use:** Weight management, obesity treatment

**Notes:****Does not offer samples**

Offers other resources for patients here: 

<https://hcp.qsymia.com/resource-center/downloads/>

Use caution if offering a rep visit/contact with Vivus - their employees have been VERY HARD to get in contact with

---

### Pataday

*Article ID: 44184795860372*

**Brand Name:** Pataday

**Manufacturer** : Alcon Pharmaceuticals

**Alt Names:** olopatadine

**Use:** over-the-counter itchy eyes

**Notes:****SAMPLING PROGRAM HAS ENDED. NO LONGER OFFERS SAMPLES**

**Process:**

  1. Can call to check here:1‑800‑757‑9195
  2. ask to be routed to Vision Care sales and ask a rep to bring samples. 
  3. If not available, can also suggest patient coupons.
  4. These can be requested here: <https://www.myalcon.com/professional/ocular-health/allergy-drops/pataday/registration-form/>

---

### MediHoney Gel

*Article ID: 44184597787284*

**Brand Name:** MediHoney Gel

**Alt Names:** Active Leptospermum Honey (ALH) / Manuka Honey Gel

**Use:** wound dressing

**Notes:****TEMPORARILY UNAVAILABLE**

samples placed on hold

---

### La Roche Posay

*Article ID: 44184563410068*

**Brand Name:** La Roche Posay

**Alt Names:** laroche posay

**Use** : Skincare brand

**Notes:****TEMPORARILY UNAVAILABLE**

limited sample available and does not distribute at this time.

---

### Genexa

*Article ID: 44184528501268*

**Brand Name:** Genexa (company, not specific medication)

**Use:** pain relief, allergy symptoms, pediatric medicine

**Notes:****SAMPLES TEMPORARILY UNAVAILABLE**

Samples are on hold, but the HCP can send in a form to be added to their mailing list here:

[https://www.genexa.com/pages/contact-us](https://www.genexa.com/pages/contact-us)

---

### Epipen

*Article ID: 44184461602068*

**Brand Name:** Epipen

**Alt Names:** epinephrine injector pen

**Use:** emergency treatment of severe allergic reactions (anaphylaxis)

**Notes:****Samples not available**

Demo/Training device can be requested via the Viatris Connect form here:

<https://cloud.email.viatrisconnect.com/EpiPen-Trainer-Pen-Registration>

**Note:** Trainers are currently on backorder. Trainer requests can be placed directly through Customer Relations by calling [800-796-9526](tel:8007969526) and pressing Option 2. A confirmation email will be sent once the trainers ship.

---

### Aleve

*Article ID: 44184307799444*

**Brand Name:** Aleve

**Alt Names:** naproxen, NSAID

**Use:** pain reliever & fever reduction, NSAID

**Notes:****Stock varies, if unavailable, we will not have an estimate of when it will be back in stock**

Would usually be available on the Bayer sample portal: <https://hcp-samples.bayer.com/product-samples/aleve>

Can call 800-395-0689 to check availability as needed.

---

### NOT AVAILABLE for Samples or Reps

*Article ID: 44016009289236*

# Alphagan

**Brand Name:** Alphagan

**Alt Names:** Brimonidine

**Use:** reduction of elevated Intraocular Pressure (IOP) in patients with open-angle glaucoma or ocular hypertension

**Notes:** Samples and Reps not available

# Amoxil

**Brand Name:** Amoxil

**Alt Names:** amoxicillin

**Use:** penicillin antibiotic

**Notes:** Item not available

# Anusol HC

**Brand Name:** Anusol HC

**Alt Names:** Anugesic-HC, Proctosedyl, Uniroid, Xyloproct.

**Use:** minor pain, itching, swelling, and discomfort caused by hemorrhoids and other problems of the anal area

**Notes:** Item not available

# Augmentin

**Brand Name:** Augmentin

**Alt Names:** Amox-Clav

**Use:** combination antibiotic (combines amoxicillin and clavulanic acid), treats bacterial infections

# Breo Ellipta

**Brand Name:** Breo Ellipta

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt Names:** Fluticasone furoate / Vilanterol

**Use:** used long term to prevent and control symptoms of asthma for better breathing and to prevent symptoms such as wheezing.

**NO SAMPLES OR REPS AVAILABLE**

**Notes:**<https://hcp-account.gskpro.com/en-XG/login?ref=gskpro>

# Bystolic

**Brand Name:** Bystolic

**Alt Names:** Nebivolol

**Use:** Novel beta blocker for hypertension

**Notes:** SAVINGS CARD ONLY This is not for samples or a rep visit

# Ciprodex

**Brand Name:** Ciprodex

**Alt Names:** ciproflaxin, dexamethasone

**Use:** swimmers ear (acute oritis externa), middle ear infection (acute oritis media)

**Notes:** Sandoz Pharmaceuticals (previously a part of Novartis) confirmed that they do not offer samples or rep visits for this product at this time.

# Crestor

**Brand Name:** Crestor

**Alt Names:** Rosuvastatin

**Use:** used to prevent cardiovascular disease in those at high risk and treat abnormal lipids

**Notes:** Spoke to AstraZeneca Pharmaceuticals (800-236-9933)- Crestor Manuf confirms samples are no longer available. 

# Dotti

**Brand Name:** Dotti

**Alt Names:** Transdermal estradiol system

**Use:** help reduce symptoms of menopause

**Notes:** No reps available

# Edarbi

**Brand Name:** Edarbi

**Alt Names:** Azilsartan Medoxomil

**Use:** high blood pressure

**Notes:** "Azurity no longer offers samples of Edarbi but does still offer other valuable patient resources. Please visit azuritysolutions.com/hcp for more information"

# 

# Edarbyclor

**Brand Name:** Edarbyclor

**Alt Names:** Azilsartan Medoxomil/Chlorthalidone

**Use:** high blood pressure

**Notes:** "Azurity no longer offers samples of Edarbyclor but does still offer other valuable patient resources. Please visit azuritysolutions.com/hcp for more information"

# Emend

**Brand Name:** Emend

**Alt Names:** aprepitant

**Use:** prevent nausea & vomiting

**Notes:** Manufacturer (Merck) confirmed no samples are offered.

# Finasteride

**Brand Name:** Finasteride

**Alt Names:** Propecia, Proscar

**Use:** treats BPH and male pattern hair loss

**Notes:** No longer offer samples

# Flonase

**Brand Name:** Flonase

**Alt Names:** Fluticasone

**Use:** seasonal allergies

**Notes:** Samples are not on the manufacturer portal

# 

# Imitrex

**Brand Name:** Imitrex

**Alt Names:** Sumatriptan

**Use:** Migraines

**Alternative Medications** : We can offer Ubrelvy and Emgality as alternatives

# 

# Incruse Ellipta

**Brand Name:** Incruse Ellipta

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt Names:** Umeclidinium inhalation powder (LAMA – long-acting muscarinic antagonist)

**Use:** Once-daily maintenance treatment of chronic obstructive pulmonary disease (COPD) (not a rescue inhaler)

**Notes:****NO SAMPLES AVAILABLE**

# Lunesta

**Brand Name:** Lunesta

**Alt Names:** eszopiclone

**Use:** controlled substance; treatment for insomnia  
  


**Notes:** samples are not available. Waylis CS: 800-689-0255

# Motegrity

**Brand Name:** Motegrity

**Alt Names:** prucalopride

**Use:** chronic idiopathic constipation (CIC)

**Notes:** sample program ended on Jun 30, 2025

# Multaq

**Brand Name:** Multaq

**Manufacturer** : Sanofi

**Alt Names:** dronaderone

**Specialty** : Cardiology

**Uses:** heart disease, reduce the risk of hospitalization for atrial fibrillation (AFib) 

**Important Notes: No longer available for sampling per Manufacturer**

  


# Myrbetriq

**Brand Name:** Myrbetriq

**Alt Names:** Mirabegron

**Use:** Overactive Bladder

**Notes:** Samples and Reps not available

# Protopic

**Brand Name:** Protopic

**Alt Names:** tacrolimus

**Use:** eczema

**Notes:** Protopic® Ointment is no longer available in the US, as this product has been discontinued and is no longer on the market. do not have samples or Sales Representatives for this product.

# Rogaine

**Brand Name:** Rogaine

**Alt Names:** minoxidil

**Use:** increases new hair growth in cases of hereditary hair loss.

**Notes:** Called Rogaine and was informed that they no longer offer samples.

# Rozerem

**Brand Name:** Rozerem

**Alt Names:** ramelteon

**Use:** insomnia

**Notes:** Manufacturer (Takeda Pharmaceuticals) does not offer samples.

# Silenor

**Brand Name:** Silenor

**Alt Names:** doxepin hydrochloride, tricyclic antidepressant 

**Use:** insomnia

**Notes:** Manufacturer (Currax Pharmaceuticals, formerly Pernix/Somaxon) does not provide samples. 

# Solu-Medrol

**Brand Name:****Solu-Medrol**

**Alt Names:** IV/IM Methylprednisolone

**Use:** IV/IM Steroids

**Notes:****** Item not available

# Sudafed

**Brand Name:** Sudafed

**Alt Names:** pseudoephedrine

**Use:** nasal decongestant

**Notes:** not available 

# Synjardy

**Brand Name:** Synjardy

**Alt Names:** empagliflozin/metformin HCI

**Use:** type 2 diabetes

**Notes:** not available per Boehringer Ingelheim

# Systane

**Brand Name:** Systane

**Use:** eye lubricant

**Notes:** Called Alcon and was advised that they no longer offer samples of Systane. 1800-757-9785

# Tresiba Flexpen

**Brand Name:** Tresiba Flexpen

**Alt Names:** insulin degludec

**Use:** type 1 and type 2 diabetes

**Notes:** Novo Nordisk stopped the sample program in December 2024. 

# Tretinoin

**Brand Name:** Tretinoin

**Alt Names:** Retin-A

**Use:** acne

**Notes:** Unavalable for sampling, Altreno may be an alternative (unconfirmed process)

# Tri-luma

**Brand Name:** Tri-luma

**Alt Names:** fluocinolone + hydroquinone + tretinoin

**Use:** melasma

**Notes:** Manufacturer (Galderma) do not provide samples

# Trijardy

**Brand Name:** Trijardy

**Alt Names:** empagliflozin/linagliptin/metformin HCI

**Use:** type 2 diabetes

**Notes:** Not available.

# Viagra

**Brand Name:** Viagra

**Alt Names:** Cialis, sildenafil, tadalafil

**Use:** treatment for erectile dysfunction

**Notes:** Manufacturer Viatris (previously pfizer) does not provide samples  
of this product

# Vivelle-dot

**Brand Name:** Vivelle-dot

**Alt Names:** Estradiol

**Use:** regulation of female reproductive cycles

**Notes:** Was manufactured by Novartis before, now acquired by Sandoz, they do not provide samples for this product.

# Vyvanse

**Brand Name:** Vyvanse

**Alt Names:** Lisdexamfetamine

**Use:** ADHD

**Notes: No samples or coupons available**

# Zithromax

**Brand Name:** Zithromax

**Alt Names:** antiobiotic

**Use:** treats bacterial infections

# Zofran

**Brand Name:** Zofran

**Alt Names:** ondansetron, Zuplenz

**Use:** nausea and vomiting

---

### Trelegy

*Article ID: 43977912121492*

**Brand Name:** Trelegy

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt names:** Fluticasone / Umeclidinium / Vilanterol Inhaler

**Use:** COPD, Asthma

**Process Type:** Samples

**Portal:**[ https://www.trelegyhcp.com/access/savings-and-samples/](https://www.trelegyhcp.com/access/savings-and-samples/)

---

### Ryaltris

*Article ID: 43888806466324*

**Brand Name:** Ryaltris

**Manufacturer** : Glenmark pharmaceuticals

**Alt names:** oloptadine/mometasone (combination nasal spray)

**Use:** seasonal allergic rhinitis

**Process Type:** Samples

**Process** :

  1. Gather HCP information including State License number, Practice Phone, Practice Fax, Practice Name, and Practice Address
  2. Fill out form here: [https://us.ryaltris.com/savings-and-support/request-samples/](https://us.ryaltris.com/savings-and-support/request-samples/)

---

### Dymista

*Article ID: 43888753553556*

**Brand Name:** Dymista

**Manufacturer** : Meda Pharmaceuticals, Viatris

**Alt names:** Azelastine/fluticasone (combination nasal spray)

**Use:** seasonal allergic rhinitis

**Process Type:** Samples

**Portal Link** : <https://www.pdffiller.com/539134243--Dymista-Sample-Requirements-Form-July-1-2019June-30-2020DTPMylan->

---

### Cosopt

*Article ID: 43687349515028*

**Brand Name:** Cosopt

**Manufacturer** : Thea

**Alt names:** dorzolamide/timolol (combination eye drop)

**Use:** elevated intraocular pressure

**Specialty** : ophthalmology, optometry

**Process Type:** Samples

**UNCONFIRMED PROCESS**

**Portal Link** : https://thea.mysamplecloset.com/login

---

### Xolair

*Article ID: 43630682767508*

**Brand Name:** Xolair

**Manufacturer** : Genentech, Novartis

**Alt names:** omalizumab

**Use:** Allergic Asthma, Chronic Spontaneous Urticaria (CSU), Chronic Rhinosinusitis with Nasal Polyps (CRSwNP), IgE-Mediated Food Allergy

**Specialty** : Allergy, Pulmonology

**Process Type:** Samples and Reps

**Timeline:** ~ 20 days

**Process:****Samples are delivered by rep visit**

Submit a rep visit via <https://www.xolairhcp.com/contact-rep.html>

OR 

Call 866-496-5247 to request a sample. Samples delivered by sales rep during a visit

---

### Vanicream

*Article ID: 43615695997076*

**Brand Name:** Vanicream

**Manufacturer** :**** Pharmaceutical Specialties, Inc.

**Use:** over-the-counter fragrance-free sensitive skin care, skincare brand

**Process Type:** Samples

**Timeline:** 2-6 weeks (depending on their stock)

**Process:****Samples eligible for Dermatologists, Pediatricians, and Allergists**

  1. Place a sample order here: <https://www.vanicream.com/for-professionals/request-samples>
  2. Call 800-325-8232 with the provider info to get a status update on delivery time.

---

### Uribel

*Article ID: 43615654346132*

**Brand Name:** Uribel 

**Manufacturer** : Mission Pharmacal Company

**Alt names:** Combination of 5 medications: hyoscyamine / methenamine / phenyl salicylate / benzoic acid / methylene blue

**Use:** treat bladder irritation caused by UTI

**Process Type:** samples

**Timeline:** 1-3 weeks

**Process:**

  1. Gather relevant information, they will ask for the HCP name, NPI, address, phone and fax number
  2. call 210-696-8400 to place the request

---

### Silagen

*Article ID: 43615553994260*

**Brand Name:** Silagen

**Manufacturer** : Newmedical Technology, Inc

**Alt names:** Medical-grade Silicone

**Use:** Physician-Exclusive post-procedure recovery silicone for scarring and bruising

**Process Type:** sample

**Timeline:** ~5 weeks

**Process:**

  1. Gather HCP Practice address
  2. Fill out the form here: <https://www.silagen.com/contact-us/>
  3. State in "comment or message" that we want to request samples
  4. They will reach out first through email to confirm the address.
  5. Once the samples are shipped, the manufacturer will provide shipping details



Alternatively, may send an email to [info@silagen.com](mailto:info@silagen.com)

---

### Sente Even Tone  Sunscreen

*Article ID: 43615457101076*

**Brand Name:** Sente Even Tone Sunscreen

**Alt names:** n/a

**Use:** sunscreen

**Process Type:** samples

**Timeline:** <1 week

**Process:**

  1. Contact Sente here: <https://sentelabs.com/pages/contact-us>
  2. Received an email response the next day asking for more information about the HCP for creating a potential partnership to deliver the samples to their practice.
  3. Need to gather HCP permission to forward the email to them or give their contact information moving forward.
  4. Otherwise, can gather the requested information on their behalf and continue the request on their behalf (but they will likely want to speak directly with the HCP before finalizing the partnership/delivering samples).

---

### Rejuvaskin

*Article ID: 43615365468436*

**Brand Name:** Rejuvaskin 

**Manufacturer** : Rejuvaskin

**Use:** scar management

**Process Type:** sample

**Timeline:** one week

**Process:**

  1. Gather HCP practice name and address
  2. Fill in the necessary detail here: <https://share.hsforms.com/1hVt7u6jbQXqtliPTzhkXFw3h5xo>

---

### Refresh Artificial Tears

*Article ID: 43615345670932*

**Brand Name:** Refresh Artificial Tears

**Manufacturer** : Allergan, Abbvie

**Alt names:** lubricant eye drops

**Use:** over-the-counter dry eye relief

**Process Type:** samples

**Timeline:** 1-2 weeks

**Process:****Only eligible for Opthalmologists and Optometrists**

  1. Gather HCP NPI and Address
  2. Call Refresh Concierge at 833-733-7675
  3. Reorder schedule may vary



Samples Available: 

  * Refresh Relieva
  * Refresh Relieva for Contacts
  * Refresh Digital
  * Optive Gel Drops



HCP can request additional samples every 90 days.

Refresh Concierge email as alternative to phone number above: [**refresh-concierge@abbvie.com**](mailto:refresh-concierge@abbvie.com)

---

### Omnipod

*Article ID: 43615307980436*

**Brand Name:** Omnipod

**Manufacturer** : Insulet

**Alt names:** Insulin Pump

**Use:** Tubeless, automated insulin delivery for type 1 and type 2 diabetes

**Specialty** : Endocrinology

**Process Type:** Rep & Samples (if eligible)

**Timeline:** 2+ weeks

**Process:****Only offers samples to Endocrinologists**

  1. Place a rep visit request online here: <https://www.omnipod.com/hcp/contact/omnipod-rep>
  2. If no contact with rep in 5-7 days, call Insulet support here: 1-800-591-3455 to request local rep contact info and reach out to them directly and schedule a visit to delivery samples (if eligible)
  3. if HCP not eligible, can offer educational materials.

---

### NP Thyroid

*Article ID: 43615198242708*

**Brand Name:** NP Thyroid 

**Manufacturer** : Acella Pharmaceuticals

**Alt names:** Thyroid tablets

**Use:** management of hypothyroidism

**Process Type:** Sample

**Timeline:** 5 business days

**Process:**

  1. Gather HCP’s name, address, NPI, state license number, license expiration date, and preferred sample strength
  2. <https://npthyroid.com/for-practitioners/get-samples/>
  3. A representative will contact the agent to confirm certain details regarding the HCP
  4. The rep will send a form via email that requires the HCP’s e-signature. Once completed, you will receive a sample order receipt in your email.
  5. After the samples have been shipped, forward the acknowledgement receipt to the HCP.

---

### Mighty Me Nutty Puffs

*Article ID: 43615112531348*

**Brand Name:** Mighty Me Nutty Puffs

**Manufacturer** : Mission MightyMe

**Alt names:** children's peanut snack

**Use:** pediatrics - to introduce infants & children to peanuts

**Process Type:** samples

**Timeline:** 2-3 weeks

**Process:**

  1. Gather HCP Practice Name & Address
  2. place request here: <https://missionmightyme.com/pages/request-samples>
  3. May require email follow up: [providers@missionmightyme.com](mailto:providers@missionmightyme.com)

---

### Lumify

*Article ID: 43615087261332*

**Brand Name:** Lumify

**Manufacturer:** Basuch & Lomb

**Alt names:** brimonidine

**Use:** Redness relief eye drops

**Process Type:** samples

**Timeline:** 10-12 days

**Process:**

  1. Gather HCP address and specialty
  2. Call Bausch+Lomb service associate at 855-542-5682  




May also attempt to get in contact with a sales rep using the Rep Finder:

<https://repfinder.bausch.com/>

---

### Lubricity

*Article ID: 43615070140692*

**Brand Name:** Lubricity

**Alt names:** Sodium Hyaluronate (Oral Use)

**Use:** over the counter, treats Xerostomia, dry mouth

**Process Type:** Samples

**Timeline:** 1-2 weeks

**Process:**

  1. Gather HCP Practice name and address will be required.
  2. Submit forms on
     1. <https://mailchi.mp/lubricityinnovations.com/sample-requests>
     2. <https://mailchi.mp/lubricityinnovations/lubricity-xtra-sample-request-form>
  3. Follow-up weekly by calling 716-204-7215
  4. The person responsible for sending the samples out will call the practice and will not use the number in the form, don't expect a call but make sure to follow-up by the end of the week.
  5. Follow-up with HCP.

---

### ISDIN Sunscreen

*Article ID: 43612740312980*

**Brand Name:** ISDIN Sunscreen

**Use:** sunscreen

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Process:**

  1. Submit a support request here: <https://love.isdin.com/en-US/contact-us?country=US>
  2. Once received, you should get an email to schedule a meeting with the HCP or with the portal to place a request.

---

### Equelle

*Article ID: 43612650542612*

**Brand Name:** Equelle

**Manufacturer** : Otsuka

**Alternative Name** : S-equol

**Use:** menopause supplement

**Process Type:** samples

**Timeline:** 7 business days

**Process:**

  1. Gather HCP information including Practice Address
  2. Fill out form here: [https://equelle.com/pages/hcp-sample-request-form](https://equelle.com/pages/hcp-sample-request-form?srsltid=AfmBOorLEKaf3DSHQ6J_h9m-9TTd7hy0aiZarMd6AYV1ysamSD10ir-o)

---

### Creon

*Article ID: 43612270294932*

**Brand Name:** Creon

**Manufacturer** : Abbvie

**Alt names:** Pancrelipase

**Use:** treat EPI (exocrine pancreatic insufficiency), chronic pancreatitis

**Specialty** : Gastroenterology

**Process Type:** Samples, Rep

**Timeline:** 1-2 weeks

**Process:**

  1. Gather HCP practice address
  2. Call 800-441-4987 to get the local Sales Rep information for requesting samples 
  3. Reach out to the Sales Rep to schedule a visit
  4. HCP signature will be required for the samples

---

### Cerave

*Article ID: 43612214239636*

**Brand Name:** CeraVe

**Use:** sensitive skin care, lotions, sunscreen, & eczema care, skincare brand

**Process Type:** Samples

**Timeline:** 4-6 weeks

**Process:****WILL ONLY SEND TO DERMATOLOGISTS**

  1. Call 844-CERAVE-1 with HCP info to place a sample request 
  2. can request 4 items every 3 months - each come with 60 units:

Cerave baby lotion  
Cerave baby moisturizing cream  
Cerave healing ointment  
Cerave foaming facial cleanser  
Cerave hydrating cleanser  
Cerave Itchy Relief Moisturizing Lotion  
Cerave ultra light moisturizing lotion SPF 30  
Cerave moisturizing cream  
Cerave moisturizing face lotion AM SPF 30  
Cerave moisturizing face lotion PM  
Cerave moisturizing lotion  
Cerave Renewing Salicylic Acid Cream  
Cerave psoriasis moisturizing cream"

---

### Cequa

*Article ID: 43612116012436*

**Brand Name:** Cequa

**Manufacturer** : Sun Pharmaceuticals

**Alt names:** cyclosporine

**Use:** chronic dry-eye

**Specialty** : Ophthalmology, Optometry

**Process Type:** samples

**Timeline:** 1-4 weeks

**Process:**

  1. Gather information: HCP : name, NPI, address, phone and fax number
  2. call (800) 818-4555
  3. Place samples request
  4. samples will be sent to office

---

### Calmoseptine

*Article ID: 43593656032020*

**Brand Name:** Calmoseptine

**Alt names:** Zinc Oxide + Calamine

**Use:** treat and prevent minor skin irritations like those resulting from diarrhea, burns, cuts, and scrapes.

**Process Type:** samples

**Timeline:** ships every Monday. Previous request only took a day to receive the samples

**Process:**

  1. Gather HCP address and contact information for samples
  2. call at 800-800-3405 or send a fax to 714-840-9810
     * was asked if it's the first time requesting the samples
  3. Samples are shipped every Monday and can have it in 1-2 days



**Information page** :

<https://www.calmoseptineointment.com/reqsampl.htm>

---

### Botox

*Article ID: 43593256601236*

**Brand Name:** Botox

**Alt names:** botulinum toxin type A, OnabotulinumtoxinA

**Use:** blocks muscle contraction, can be used for medical & cosmetic purposes

**Process Type:** Rep & Samples

**Process:**

  1. If HCP does not already have an Allergan account, the** HCP can call Allergan to set one up.********WE CANNOT SET UP AN ACCOUNT FOR THEM******
  2. To make an account, **THE HCP** can call Allergan Aesthetics at 844‑639‑2246, or can create an account at <https://www.allerganadvantage.com/s/> \-- they will need registered business name and EIN.
     * Once an account is established, they should be able to give you a local rep to contact. 
       * They may ask more details before connecting you with the rep (i.e., what the HCP experience is using Botox, what the samples will be used for, etc.). 
       * When presented with these questions, let them know that you are calling on behalf of the HCP but they will better be able to answer those questions once connected with the rep.
  3. Reach out to sales rep and let them know the HCP is interested in samples of Botox  




**Alternative Process (Unconfirmed)** :

  1. fill out form for contact with an Account Specialist:  
<https://www.botoxone.com/request-a-rep>

---

### Blink eye drops

*Article ID: 43593043810836*

**Brand Name:** Blink eye drops

**Alt names:** Blink Hydration boost, Blink nourishing, Blink preservative-free

**Use:** Lubricating eye drops

**Process Type:** samples

**Timeline:** 10-12 days

**Process:**

  1. Gather HCP address and Specialty
  2. Call Bausch & Lomb service associate at 855-542-5682




May also use Bausch and Lomb rep finder to locate a sales rep:  
<https://repfinder.bausch.com/>

---

### Auvi-Q

*Article ID: 43593000119316*

**Brand Name:** Auvi-Q

**Manufacturer** : Kaleo

**Alt names:** epinephrine

**Use:** anaphylaxis, anaphylactic shock

**Process Type:** Demo Kit

**Process:**

  1. Gather HCP address
  2. Fill out form here: <https://www.auvi-q.com/hcp/trainer>
  3. Notify HCP of any updates you receive
  4. Check back with HCP every 5-7 days to confirm receipt, escalate if needed"

---

### Zyrtec

*Article ID: 43591860047508*

**Brand Name:** Zyrtec

**Manufacturer** : Kenvue, Johnson & Johnson

**Alt Names:** cetirizine

**Uses:** Antihistamine (seasonal allergies)

**Portal Link:**<https://kenvuepro.com/en-us/zyrtec/samples>

**Important Notes:**

Only tablet form is available for samples.  
  
Kenvue may rotate out what products are available.

---

### Zejula

*Article ID: 43591784292628*

**Brand Name:** Zejula

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt Names:** nirparib

**Uses:** ovarian cancer

**Specialty** : Oncology

**Notes:** Use caution as availability may be limited to oncologists.

**Alternative:** Go to this site and click "request samples" in top right corner: <https://zejulahcp.com/>

---

### Zarbee's

*Article ID: 43589453711636*

**Brand Name:** Zarbee's

**Manufacturer** : Kenvue

**Uses:** Brand of wellness products containing natural ingredients for cough, cold, others

**Portal Link:**<https://kenvuepro.com/en-us/zarbees>

---

### Xyzal

*Article ID: 43589386714900*

**Brand Name:** Xyzal

**Manufacturer** : Sanofi

**Alt Names:** levocetirizine, antihistamine

**Uses:** Antihistamine (seasonal allergies)

**Portal Link:**<https://hcpportal.hcpordering.com/landingPage>

**Important Notes:** Samples availability changes based on HCP specialty

---

### Voltaren Gel

*Article ID: 43589377802772*

**Brand Name:** Voltaren Gel

**Manufacturer** : Haleon, GSK

**Alt Names:** diclofenac, topical NSAID

**Uses:** arthritis, pain relief

**Portal Link:**<http://www.haleonhealthpartner.com/en-us>

**Important Notes:****Stock varies** \-- notified out of stock as of 2/20/26

---

### Toujeo

*Article ID: 43589281952020*

**Brand Name:** Toujeo

**Manufacturer** : Sanofi

**Alt Names:** insulin glargine

**Uses:** diabetes

**Specialty** : Endocrinology

**Portal Link:**<https://sanofisamplingportal-us.com/authentication/login>

**Alternate Process:**

  1. Gather HCP NPI
  2. Call Sanofi Sampling Portal at 800-973-3620
  3. The agent there will take the HCP's NPI and can let you know if they can order any demo kits, if they need to sign up, or if the Sampling Program can email them a form to sign up for sampling.
  4. If someone is already enrolled in the sampling program (if they have a login to the portal), we can ask the sampling portal agent to send a form to the HCP's email that the HCP can then fill out and fax/email back

---

### SuperMouth Toothpaste

*Article ID: 43589226722068*

**Brand Name:** SuperMouth Toothpaste

**Manufacturer** : SuperMouth, LLC

**Uses:** brand of toothpaste for dental health

**Process:**

  1. Send form to HCP to fill out, asks provider-specific questions such as what they would like the URL for their unique supermouth site to be


  * <https://supermouthpro.com/register>

---

### Salonpas

*Article ID: 43587283018772*

**Brand Name:** Salonpas

**Manufacturer** : Hisamitsu Pharmaceutical Co., Inc.

**Alt Names:** lidocaine 4% patch

**Uses:** localized pain relief

**Process:**

  1. Gather HCP information such as Specialty and Practice address
  2. Fill out form here:****<https://salonpaspro.com/registration>



**Important Notes:** For refill sample orders: email directly at [salonpas@pjmcnerney.com](mailto:salonpas@pjmcnerney.com)

---

### Resinol

*Article ID: 43568419832852*

**Brand Name:** Resinol

**Manufacturer** : Medimetriks Pharmaceuticals

**Alt Names:** Resorcinol and Petrolatum

**Uses:** skin ointment for minor irritation and cuts

**Timeline** : Less than 2 weeks

**Process:**

  1. Gather HCP information such as Practice Name, Practice Phone Number, and Practice Address
  2. Fill out form here:****<https://resical.com/resinol-medicated-ointment/sample-request/>

---

### Qelbree

*Article ID: 43568256514580*

**Brand Name:** Qelbree

**Manufacturer** : Supernus Pharmaceuticals

**Alt Names:** Viloxazine

**Uses:** ADHD in children and adults

**Specialty** : Psychiatry, Neurology

**Portal Link:**<https://supernus.hcpordering.com/>

**Important Notes:** Portal restricts samples by specialty -- different specialties selected will show different samples available

---

### Oxtellar XR

*Article ID: 43568122221844*

**Brand Name:** Oxtellar XR

**Manufacturer** : Supernus

**Alt Names:** Oxcarbazepine

**Uses:** treat epilepsy, generalized seizures

**Specialty** : Neurology

**Portal Link:**<https://supernus.hcpordering.com/>

**Important Notes:** Portal restricts samples by specialty -- different specialties selected will show different samples available

---

### Omnibiotic

*Article ID: 43568052899092*

**Brand Name:** Omnibiotic

**Manufacturer** : Institut AllergoSan

**Alt Names:** Probiotics

**Uses:** Probiotics for adult and infant patients, digestive health

**Process:**

  1. Gather HCP information including Practice Name, Practice Address
  2. Fill out form here****<https://omnibioticlife.com/pages/samples-1>
  3. Keep HCP informed of any updates you receive

---

### Multaq

*Article ID: 43567985212308*

**Brand Name:** Multaq

**Manufacturer** : Sanofi

**Alt Names:** dronaderone

**Specialty** : Cardiology

**Uses:** heart disease, reduce the risk of hospitalization for atrial fibrillation (AFib) 

**Important Notes: No longer available for sampling per****Manufacturer**

****<https://sanofisamplingportal-us.com/authentication/login>

---

### MiraLAX

*Article ID: 43567132313236*

**Brand Name:** MiraLAX

**Manufacturer** : Bayer

**Alt Names:** Polyethylene glycol 3350, laxative

**Uses:** treatment for constipation

**Portal Link:**<https://hcp-samples.bayer.com/product-samples/miralax>

---

### Maximum D3

*Article ID: 43566008926868*

**Brand Name:** Maximum D3

**Alt Names:** Vitamin D

**Uses:** Vitamin D supplements and vitamins (for adults only)

**Process:**

  1. Gather HCP information including Practice Address
  2. Fill out form here: <https://maximumd3.com/pages/healthcare-professionals>



**Important Notes:** does not have reps, it’s a direct online order form.

---

### Lynparza

*Article ID: 43565950498580*

**Brand Name:** Lynparza

**Manufacturer** : AstraZeneca, Merck

**Alt Names:** olaparib

**Uses:** ovarian cancer, breast cancer, prostate cancer, pancreatic cancer

**Specialty** : Oncology

**Notes:** Use caution as availability may be limited to oncologists.

**Process:**

  1. Send form to HCP, asks for DEA number which is private information that we should not ask for at this time
  2. <https://www.astrazeneca-us.com/contact-us/hcp-request-for-pharmaceutical-samples.html>



**Important:** ONC offering - requires license & DEA number to complete form

---

### Litfulo

*Article ID: 43565765533332*

**Brand Name:** Litfulo 

**Manufacturer** : Pfizer

**Alt Names:** ritlecitinib

**Uses:** severe alopecia areata for 12+ yr olds

**Specialty** : Dermatology

**Portal Link:**<https://www.pfizerpro.com/request-samples>

HCP an also request a rep through PfizerPro, or we can call 1-800-505-4426

---

### Letybo

*Article ID: 43563486681876*

**Brand Name:** Letybo

**Manufacturer** : Benev, Hugel

**Alt Names:** Botulax, LetibotulinumtoxinA-wlbg

**Uses:** reduce fine lines and wrinkles caused by muscle movement

**Important Notes:**

  1. Gather HCP information including practice address and HCP Specialty
  2. Fill out form here:****[**https://www.letybousa.com/**](https://www.letybousa.com/)  
Click "Connect with a Letybo rep" in the top right, or scroll down to the bottom of the site

---

### Kendamil

*Article ID: 43563420981140*

**Brand Name:** Kendamil

**Manufacturer** : Kendamil Nutricare Ltd

**Uses:** infant baby formula

**Process:**

  1. Gather HCP information as it appears on the form such as office address.
  2. Fill out form here:****<https://hcp.kendamil.com/pages/order-samples-us-ca>
  3. Note there are questions which we may not know the answers to or might be burdensome for us to ask the HCP such as "number of infant patients per month who would need samples", so it might be better for us to send them the form rather than fill it out ourselves

---

### Ibuprofen

*Article ID: 43558236444820*

**Brand Name:** Ibuprofen

**Alt Names:** Advil, Motrin

**Uses:** pain reliever, fever reducer, NSAID

**Portal Link:**<https://kenvuepro.com/en-us/>

**Important Notes:** check current availability before sending link  
Kenvue may rotate out what products are available.

---

### Hiya Supplements

*Article ID: 43556527878676*

**Brand Name:** Hiya Supplements

**Manufacturer** : Hiya Health

**Alt Names:** daily vitamins

**Uses:** Various supplements for infants and children

**Process:**

  1. Submit form here. Note there are many questions which we may not know the answers to or might be burdensome for the HCP for us to ask such as "approximate number of patients over 2 years of age", so it might be better for us to send them the form rather than fill it out ourselves
  2. <https://hiyahealth.com/pages/professionals>



**Important Notes:** samples only   
does not have reps, it's a direct online order form.

Form asks specific questions we do not know the answer to such as "approximate number of patients over the age of 2 in your practice"

---

### Florastor

*Article ID: 43534778001044*

**Brand Name:** Florastor

**Manufacturer** : Biocodex

**Alt Names:**_Saccharomyces boulardii_

**Uses:** Probiotics for adults

**Portal Link:**<https://florastorhcp.com/account/register>

---

### Elta MD

*Article ID: 43534664282132*

**Brand Name:** Elta MD

**Uses:** Brand of moisturizer, Face sunscreen.

**Portal Link:**<https://www.cpskinhealthpro.com/auth/registration>

**Important Notes:** once HCP fills out form and is approved, they will be eligible to receive professional samples

---

### Delsym

*Article ID: 43534546836116*

**Brand Name:** Delsym

**Manufacturer** : Reckitt Benckiser

**Alt Names:** dextromethorphan

**Uses** : over-the-counter cough suppressant, cold medicine

**Note:** HCP must register for resources to display

**Portal Link:**<https://www.rbhcprofessional.com/s/resource-center?brand=Delsym>

---

### DEKAs Plus

*Article ID: 43534441878292*

**Brand Name:** DEKAs Plus

**Alt Names:** multivitamin

**Uses:** Multivitamins and supplements

**Process:**

  1. Gather HCP information including HCP Specialty, Practice Name, and Practice Address
  2. Fill out form here:****<https://callionpharma.com/dekas-plus-professional-sample-request/>



**Important Notes:**

Samples only. does not have reps, it’s a direct online order form.

---

### Ddrops

*Article ID: 43534433054996*

**Brand Name:** Ddrops

**Alt Names:** liquid vitamin d3 drops, d drops

**Uses:** infant supplement for growth & development (for infants)

**Process:**

  1. Gather HCP information including Practice Address, Practice Phone number, # of HCPs at the office, # of first time newborn visits seen
  2. Submit form here: <https://formsv2.vitaminddrops.com/us-eng/>
  3. Note there are many questions which we may not know the answers to or might be annoying for the HCP for us to ask such as "how many providers are in your office, how many newborns patients do you see per week", so it might be better for us to send them the form rather than fill it out ourselves
  4. samples are shipped directly to HCP



**Important Notes:**

Samples only. This product does not have reps available. All samples are directly shipped

---

### Culturelle

*Article ID: 43534312157844*

**Brand Name:** Culturelle

**Manufacturer** : i-Health

**Alt Names:**_Lactobacillus rhamnosus_ GG

**Uses:** Probiotics for adult and infant patients, digestive health

**Process:**

  1. Gather HCP information including Practice Name and Practice Address
  2. Fill out form here: <https://culturellehcp.com/en/sign-up.html>
  3. Products will ship without a confirmation

---

### Contour Next (test strips)

*Article ID: 43534261374484*

**Brand Name:** Contour Next (test strips)

**Manufacturer** : Ascensia Diabetes Care (formerly Bayer Diabetes Care)

**Uses:** blood glucose monitoring, diabetes

**Notes** : not medication, used to measure blood glucose for diabetes

**Portal Link:**<https://www.ascensiadiabetes.com/hcp/patient-resources/free-samples/>

---

### Claritin

*Article ID: 43534223684756*

**Brand Name:** Claritin

**Manufacturer** : Bayer

**Alt Names:** loratadine

**Uses:** antihistamine for seasonal allergies

**Portal Link:**<https://hcp-samples.bayer.com/>

---

### Boiron

*Article ID: 43534199210260*

**Brand Name:** Boiron

**Important Notes:** Brand site for various homeopathic products: Arnicare Gel/Cream, Camilia, Oscillo, SLEEPCALM

**Uses:** Homeopathic medicine, pain relief, allergy symptoms, antacid

**Process:**

  1. Gather HCP information including Practice Address
  2. Fill out form here: <https://www.boironusa.com/request-a-sample-form/>
  3. Products will ship without a confirmation

---

### BioGaia

*Article ID: 43534181285396*

**Brand Name:** BioGaia

**Manufacturer** : BioGaia

**Alt Names:**_Lactobacillus reuteri_

**Uses:** Probiotics for adult and infant patients, gut health

**Portal Link:**<https://hcp.biogaiausa.com/login.aspx>

---

### Aveeno Sunblock

*Article ID: 43534167619860*

**Brand Name:** Aveeno Sunblock

**Manufacturer** : Kenvue

**Uses:** sunscreen, skincare

**Portal Link:**<https://kenvuepro.com/en-us/>

**Note** : Availability may vary, Kenvue may rotate stock

---

### Aspirin

*Article ID: 43534100289044*

**Brand Name:** Aspirin

**Manufacturer** : Bayer

**Alt Names:** acetylsalicylic acid (ASA), NSAID

**Uses:** pain relief & inflammation, fever reducer, prevention for cardiovascular events, over-the-counter

**Portal Link:**<https://hcp-samples.bayer.com/>

---

### Arnica

*Article ID: 43534084986516*

**Brand Name:** Arnica

**Manufacturer** : Boiron

**Alt Names:** Arnicare

**Uses:** homeopathic over-the-counter**** joint & pain relief

**Process:**

  1. Gather HCP information including Practice Address
  2. Fill out form here: <https://www.arnicare.com/medical/request-a-sample/>
  3. Products will ship without a confirmation



**Alternative Link** : <https://www.boironusa.com/request-a-sample-form/>

---

### Aquacel

*Article ID: 43533978012948*

**Brand Name:** Aquacel

**Manufacturer** : ConvaTec

**Uses:** wound dressing, wound care

**Process:**

  1. Gather HCP information including Practice type (Hospital, Long Term Care, Pharmacy, Industry, Outpatient Clinic, Other), and Practice Address
  2. Fill out form here including which products HCP would like a sample of:****<https://www.convatec.com/advanced-wound-care/forms/request-sample-hcp-aquacel-ag-extra/>

---

### Allegra

*Article ID: 43533835391124*

**Brand Name:** Allegra

**Manufacturer** : Opella

**Alt Names:** fexofenadine

**Uses:** over-the-counter antihistamine for seasonal allergies

**Portal Link:**<https://hcpportal.hcpordering.com/landingPage>

**Important Notes:** Stock varies, samples availability changes based on the specialty the HCP inputs

---

### Advil

*Article ID: 43533790327572*

**Brand Name:** Advil

**Manufacturer** : Haleon

**Alt Names:** ibuprofen

**Uses:** pain reliever, fever reducer, NSAID, over-the-counter

**Portal Link:**<https://www.haleonhealthpartner.com/en-us/pain-relief/brands/advil/overview/>  
  
Alternative link: <https://www.haleonhealthpartner.com/en-us/samples/>

---

### Tiger Balm

*Article ID: 43407219679124*

**Brand Name** : Tiger Balm

**Manufacturer** : Haw Par Healthcare, Prince of Peace Enterprises (US Distributor)

**Alternative names** : Camphor and Menthol ointment (topical analgesic)

**Use** : over-the-counter (OTC) topical pain relief for minor aches, pains, and muscle strains

**Process Type** : Samples

**Timeline** : Not specified

**Process** :

  1. email: [contactpopus@gmail.com](mailto:contactpopus@gmail.com)
  2. Clearly state you are reaching out on behalf of a healthcare professional requesting samples
  3. Provide all necessary professional information: Full Name, Credentials, practice name, and full shipping address.

---

### Metamucil

*Article ID: 43406993576084*

**Brand Name** : Metamucil

**Manufacturer** : P&G (Procter & Gamble)

**Alternative names** : Psyllium husk

**Use** : over-the-counter (OTC) fiber supplement for digestive health

**Process Type** : Samples

**Portal Link** : [https://www.pgsciencebehind.com/en-us/metamucil](https://www.pgsciencebehind.com/en-us/metamucil)

---

### Cimzia

*Article ID: 43406974824980*

**Brand Name** : Cimzia

**Manufacturer** : UCB

**Alternative names** : certolizumab pegol

**Use** : Crohn's disease, rheumatoid arthritis, psoriatic arthritis, ankylosing spondylitis, plaque psoriasis

**Specialty** : Dermatology, Rheumatology, Gastroenterology

**Process Type** : Rep & Samples

**Process:**

**For Samples Request:**

  1. Gather HCP information including Practice Address
  2. Go to this site and click "request a sample": [https://www.cimziahcp.com/gastroenterology/moderately-severely-active-crohns-disease](https://www.cimziahcp.com/gastroenterology/moderately-severely-active-crohns-disease)
  3. Fill out form, selecting "Medical Information" or "Customer Service"
  4. Under "Your Request", indicate that you are reaching out on behalf of an HCP who is looking for samples



**For Rep Request:**

  1. Visit the rep request portal: [https://www.cimziainoffice.com/request-a-representative](https://www.cimziainoffice.com/request-a-representative)
  2. Fill out the form with HCP and practice information.
  3. [https://www.cimziahcp.com/gastroenterology/moderately-severely-active-crohns-disease](https://www.cimziahcp.com/gastroenterology/moderately-severely-active-crohns-disease)

---

### Alcon Products

*Article ID: 43406900467348*

**Brand Name** : Alcon Products

**Manufacturer** : Alcon is a manufacturer that makes many brands

**Products** : Systane, Pataday, Zaditor, Rocklatan, Rhopressa, Simbrinza, Tryptyr, Eysyvis, Inveltys, Nevanac, Ilevro

**Use** : Eye care products (e.g., dry eye, ocular allergy, contact lens solutions)

**Process Type** : Samples

**Portal Link** : <https://alcon.qpharmacorp.com/>

---

### BD Syringes

*Article ID: 43406855518612*

**Brand Name** : BD Syringes

**Manufacturer** : BD (Becton, Dickinson and Company)

**Alternative names** : syringes

**Use** : Syringes and needles for medical use (e.g., injections, fluid draw)

**Process Type** : Samples

**Process** :

  1. Draft an email to BD Customer Support at: [customer_support@bd.com](mailto:customer_support@bd.com)
  2. In the email, clearly state we are reaching out on behalf of a healthcare professional requesting samples.
  3. Provide all necessary professional information: Full Name, Credentials (MD, DO, NP, etc.), NPI number, practice name, and shipping address.

---

### Licart

*Article ID: 43406747470868*

**Brand Name** : Licart

**Manufacturer** : IBSA Pharma

**Alternative names** : diclofenac epolamine patch

**Use** : Topical treatment (patch) for acute pain from minor strains, sprains, and contusions

**Process Type** : Samples

**Process** :

  1. Visit the Licart HCP resource page: [https://licart.com/healthcare-professional-resources/](https://licart.com/healthcare-professional-resources/)
  2. Locate the "Request Samples" form on the page.
  3. https://licart.com/wp-content/uploads/2023/07/Licart-sample-request-2022_04_19.pdf
  4. Fill out the form with your professional details and shipping address-- **REQUIRES HCP SIGNATURE**
  5. HCP needs to fax completed form to 1-973-644-2379 (cover sheet not necessary) or email [IBSASRF@qpharmacorp.com](mailto:IBSASRF@qpharmacorp.com)

---

### Mag-tab SR

*Article ID: 43406681403028*

**Brand Name** : Mag-Tab SR

**Manufacturer** : Niche Mfr. Corp

**Alternative names** : magnesium L-lactate dihydrate

**Use** : Over-the-counter (OTC) Magnesium supplement

**Process Type** : Samples

**Process:**

  1. Gather HCP information including practice address and HCP Specialty
  2. Fill out form here:****[ https://www.magtabsr.com/samples](https://www.magtabsr.com/samples)

---

### Dayvigo

*Article ID: 43406511811988*

**Brand Name** : Dayvigo

**Manufacturer** : Esai

**Alt names** : lemborexant 

**Use** : Insomnia, sleep aid

**Process Type** : Samples and Rep Request 

**Timeline** : Not specified 

**Process** :

  1. Gather required information, including HCP name, NPI, specialty, practice zip code, and preferred contact phone number

  2. Visit the Eisai Engage sales professional request portal: <https://www.eisaiengage.com/request-a-sales-professional>

  3. Click "Submit" to send the request.  





**Portal Link** : <https://dayvigohcp.qpharmacorp.com/> HCP may also create a login and request directly

---

### Zoryve

*Article ID: 43225187464724*

**Brand Names** : Zoryve

**Manufacturer** : Arcutis Biotherapeutics

**Alt Names** : Rofumilast

**Uses** : Atopic Dermatitis, Seborrheic Dermatitis, Plaque Psoriasis

**Specialty** : Dermatology

**Process** :

  1. Gather HCP address
  2. Fill out form here: <https://www.zoryvehcp.com/connect-with-us>
  3. Notify HCP of any updates you receive
  4. Check back with HCP every 5-7 days to confirm receipt, escalate if needed

---

### Symbravo

*Article ID: 42961756201748*

**Brand Name:** Symbravo

**Manufacturer** : Axsome Therapeutics

**Alt names:** meloxicam/rizatriptan

**Use:** migraine

**Specialty** : Neurology 

**Process Type:** Samples, Rep

**Process:**

Request a **rep visit** at <https://www.symbravohcp.com/request-a-rep/>

  
HCP **samples portal** : <https://axsomehcpsamples.qpharmacorp.com/>

---

### Xtandi

*Article ID: 42961503804948*

**Brand Name:** Xtandi

**Manufacturer** : Boehringer Ingelheim Pharmaceuticals

**Alt names:** enzalutamide

**Use:** prostate cancer

**Specialty** : Oncology

**Process Type:** Rep and Samples

**Notes:** Use caution as availability may be limited to oncologists.

**Process:****Rep visit required (virtual may be okay)**

  1. Call PfizerPro at 1-800-505-4426
  2. Get correct rep information (must have HCP's **verified practice address** on hand)
  3. Email rep, letting them know if the HCP is requesting samples

Do not generally say that they want access to resources - if detailing the request, you should say "HCP is requesting starter samples for clinical evaluation purposes."

  4. Can coordinate rep visit with HCP
  5. Rep will then be able to order samples for HCP

---

### Xarelto

*Article ID: 42961389783316*

**Brand Name:** Xarelto

**Manufacturer** : Johnson & Johnson (Bayer & Janssen Pharmaceuticals)

**Alt Names:** rivaroxaban

**Uses:** blood thinner, treats blood clots, reduces risk of stroke and cardiovascular events, Direct Oral Anticoagulant (DOAC)

**Specialty** : Cardiology

**SAMPLES ONLY - DOES NOT HAVE REPS**

**Portal Link:**[https://www.hcpsample.com/app/index.html?cc=hcpsample&roomid=20&ac=4038](https://www.hcpsample.com/app/index.html?cc=hcpsample&roomid=20&ac=4038)

---

### Sunosi

*Article ID: 42961320659092*

**Brand Name:** Sunosi

**Manufacturer** : Axsome Therapeutics

**Alt Names:** Solriamfetol

**Uses:** treats excessive daytime sleepiness (EDS) associated with narcolepsy or obstructive sleep apnea (OSA)

**Specialty** : Neurology, Psychiatry

**Portal Link:**[ https://axsomehcpsamples.qpharmacorp.com/](https://axsomehcpsamples.qpharmacorp.com/)

**Important Notes:** May also request a rep here:  
<https://www.sunosihcp.com/contact-rep>

---

### Rinvoq

*Article ID: 42961173166740*

**Brand Name:** Rinvoq

**Manufacturer** : Abbvie

**Alt names:** upadacitinib

**Use:** atopic dermatitis, eczema, ankylosing spondylitis, rheumatoid arthritis, ulcerative colitis, crohn's disease

**Specialty** : Dermatology, Gastroenterology

**Process Type:** samples and rep visits

**Timeline:** ~2 weeks

**Process:** Can request a rep visit here: <https://www.rinvoqhcp.com/contact-a-rep>

---

### Orilissa

*Article ID: 42961165417108*

**Brand Name:** Orilissa

**Manufacturer** : Abbvie

**Alt Names:** elagolix

**Uses:** endometriosis, painful periods

**Specialty** : Ob/Gyn, Gynecology

**Portal Link:**<https://www.abbvieaccess.com/brand/orilissa>

**Important Notes:** Link also has savings cards and patient educational materials

---

### Lokelma

*Article ID: 42927988548628*

**Brand Name:** Lokelma

**Manufacturer** : AstraZeneca

**Alt Names:** sodium zirconium cyclosilicate

**Uses:** treats hyperkalemia (high potassium levels in blood)

**Specialty** : Nephrology

**Portal Link:**<http://www.astrazenecasamplecloset.com/>

---

### Ebglyss

*Article ID: 42877118651796*

**Brand Name:** Ebglyss

**Manufacturer** : Eli Lilly

**Alt names:** lebrikizumab-lbkz

**Use:** Eczema treatment

**Specialty** : Dermatology

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks rep visit, 2+ weeks shipped samples

**Process:**

  1. With practice address and NPI, can request samples and/or a rep visit here:  
<https://medical.lilly.com/us/products/contact/samples-and-sales-representative-request>



**Alternative** :

  1. Can also place an order for shipped samples here: <https://prescriberpoint.com/sample-store>
  2. **BUT HCP address must be verified** before they will be eligible, this process may take a few weeks.

---

### Bystolic

*Article ID: 42877096269588*

**Brand Name:** Bystolic

**Manufacturer** : AbbVie

**Alt Names:** Narbivolol, Nebivolol, Nebivololum

**Uses:** Novel beta blocker for hypertension

**SAVINGS CARD ONLY****:**<https://www.abbvieaccess.com/content/dam/abbvieaccess/pdf/bystolic-sample-request-form.pdf>

**Important Notes:****SAVINGS CARD ONLY This is not for samples or a rep visit**

---

### ACCRUFeR

*Article ID: 42876977086228*

**Brand Name:** ACCRUFeR

**Manufacturer** : Sheild Therapeutics / Viatris

**Alt Names:** ferric maltol

**Uses:** low-dose treatment for patients with iron deficiency (ID) or iron deficiency anemia (IDA)

**Portal Link:**<https://shield.mysamplecloset.com/login>

---

### Motegrity

*Article ID: 42876876136596*

**Brand Name:** Motegrity

**Manufacturer** : Wyeth Pharmaceuticals

**Alt Names:** prucalopride

**Use:** chronic idiopathic constipation (CIC)

**Specialty** : Primary Care, Gastroenterology

**Notes:** sample program ended on Jun 30, 2025

---

### Caplyta

*Article ID: 42866443927956*

**Brand Name:** Caplyta

**Manufacturer** : IntraCellular Therapies, Johnson & Johnson

**Alt names:** Lumateperone

**Use:** schizophrenia, bipolar I and bipolar II disorder in adults

**Specialty** : Psychiatry 

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Process:**

  1. Call Intra-cellular Therapies at 888-252-4824
  2. Request samples and a rep visit for Caplyta
  3. Customer service will send request to their rep team
  4. Make sure to get a reference number because they may take a while and re-escalating will be required
  5. If re-escalating, ask HCP if they're okay with receiving calls from the rep directly and provide the rep with HCPs number

---

### Vivitrol

*Article ID: 42866340361364*

**Brand Name:** Vivitrol

**Manufacturer** : Alkermes

**Alt names:** Naltrexone (extended release monthly injection)

**Use:** Alcohol dependence, opioid dependence

**Process Type:** Samples and Rep 

**Process:**

  1. Submitted sample request via online link: <https://www.vivitrolhcp.com/request-a-representative>
  2. (Recommended) Called Customer Service Representative at 800-848-4876 to expedite the request
  3. Received an email from the sales representative requesting HCP details
  4. Sales rep sent a Sample Request Form via email. Forwarded it to HCP for electronic signature and asked them to return it
  5. Sent back the signed Sample Request Form to the manufacturer via email
  6. Received sample shipping confirmation from the manufacturer

---

### Eucrisa

*Article ID: 42836429214740*

**Brand Name:** Eucrisa

**Manufacturer** : Pfizer

**Alt Names:** crisaborole

**Uses:** atopic dermatitis (eczema)

**Specialty** : Dermatology

**Portal Link:**<https://www.pfizerpro.com/request-samples>

**Alternative** : may also call 1-800-505-4426 and ask if they have samples/ or a rep

---

### Vevye

*Article ID: 42836276791572*

**Brand Name:** Vevye

**Manufacturer** : Harrow

**Alt names:** cyclosporine

**Use:** Dry Eye

**Specialty** : Ophthalmology, Optometry

**Process Type:** Rep visits

**Timeline:** ~7 weeks total, Once local rep was found, responsive and available within a few days

**Process:**

**Reach out to Nick or Lauren, to outreach to contact at Harrow for direct rep contact information!!!**  
1\. Once correct rep is contacted, will communicate directly with them for samples/rep visit/lunch and learn  
  
ALTERNATIVELY (never was successful)  
Official way is to reach out through this link, but after multiple calls and emails, we had no succes, and had to find the rep thru Linkedin  
<https://vevye.com/hcp/contact>

---

### Rhofade

*Article ID: 42836163476116*

**Brand Name:** Rhofade

**Manufacturer** : Mayne Pharma

**Alt names:** oxymetazoline HCP cream, 1%

**Use:** treatment for facial erythema caused by rosacea.

**Specialty** : Dermatology

**Process Type:** samples

**Timeline:** Previous request took 2 weeks

**Process:**

  1. Submit form here: <https://www.reachrx.ai/mayne_contact>
  2. a rep will contact via email or phone number provided
  3. Coordinate with HCP and rep to find a suitable date for delivery or rep meeting

---

### Otezla

*Article ID: 42836038880916*

**Brand Name:** Otezla

**Manufacturer** : Amgen

**Alt names:** apremilast

**Use:** Plaque Psoriasis, Psoriatic Arthritis, Behcet’s Disease

**Specialty** : Dermatology, Rheumatology

**Process Type:** Rep & Samples

**Timeline:** Previous request took over 3 months

**USE CAUTION WTIH THIS ONE - GIVE HCP WARNING REGARDING TIMELINE**

**Process:**

  1. Submit a request form here: <https://www.otezlapro.com/request-a-rep/>
  2. Follow up with HCP and/or manufacturer every 5-7 days until confirmation.

---

### Nemluvio

*Article ID: 42828450888980*

**Brand Name** : Nemluvio

**Manufacturer** : Galderma

**Alternative Name** : nemolixumab-lito

**Use** : Prurigo Nodularis for Adults, Atopic Dermatitis for Adults

**Specialty** : Dermatology

**Process Type:** Rep visit 

**Timeline** : 8 days

**Process** :

  1. request rep visit via support form
  2. <https://www.nemluviohcp.com/request-support>  




**Alternative Process:**

  1. Submit a general inquiry email here: [https://www.galderma.com/us/contact-us](https://www.galderma.com/us/contact-us)
  2. They will reply with the rep's contact information
  3. Reach out to rep directly to schedule a visit

---

### Dental OTC

*Article ID: 42799936417812*

Various dental OTC products available here:  
  
[https://freedentalsamples.com/](https://freedentalsamples.com/)

Products available as of 10/30/25:

Colgate  
Crest  
Dentsply Sirona  
Fixodent  
Ivoclar  
Listerine  
Sensodyne  
Ultradent

---

### Optase Hylo

*Article ID: 42723215167124*

**Brand Name:** Optase Hylo

**Manufacturer** : Scope Health

**Use:** lubricant drops and ointment to relieve dryness of the eye

**Specialty** : Ophthalmology, Optometry, Primary Care

**Process Type:** Samples

**Timeline:** 3-5 business days

**Process:** can place a sample requests via email at [hello@optase.com](mailto:hello@optase.com)

---

### Hyftor

*Article ID: 42722869253908*

**Brand Name:** Hyftor

**Manufacturer** : Nobelpharma America

**Alt names:** sirolimus 0.2% topical gel

**Use:** topical gel to treat facial angiofibroma associated with tuberous sclerosis complex (TSC)

**Specialty** : Dermatology

**Process Type:** Rep

**Timeline:** 2-3 weeks

**Process:**

  1. Submit a rep request here: <https://hcp.hyftor.com/contact-us/>
  2. You should expect to receive an email from the local rep to schedule a visit with the HCP

---

### Hemangeol

*Article ID: 42721814937108*

**Brand Name:** Hemangeol

**Manufacturer** : Pierre Fabre Pharmaceuticals

**Alt names:** propranolol hydrochloride

**Use:** treatment for infantile hemangioma

**Specialty** : Pediatrics

**Process Type:** Rep 

**Timeline:** <1 week

**Process:**

  1. Complete the “Request a visit” form here: <https://hemangeol.com/physician/physician-resources/#visit>
  2. Website will sometimes not display the form, so if you cannot locate the form on the site, request a rep via email to: [us.hemangeol.inquiries@pierre-fabre.com](mailto:us.hemangeol.inquiries@pierre-fabre.com)
  3. After initial contact, follow up with the requesting HCP in 5-7 days to see if the rep has contacted them, and if not, reach out to Hemangeol again.

---

### Voquezna

*Article ID: 42688875832852*

**Brand Name:** Voquezna

**Alt names:** Vonoprazan

**Manufacturer** : Phathom Pharmaceuticals

**Use:** potassium-competitive acid blocker, Erosive GERD treatment, heartburn

**Process Type:** samples and rep visits

**Specialty** : Gastroenterology

**Timeline:** 1-2 weeks

**Process:**

  1. Make sure to collect address info from HCP.
  2. Place a request a rep form here: <https://voqueznapro.com/request-a-rep>
  3. Call (877)-742-8466 with the provider info to get a status update.
  4. A rep will reach out to you, coordinate with rep and HCP to find a suitable date for a visit.

---

### Vizz

*Article ID: 42688547227412*

**Brand Name:** Vizz

**Manufacturer** : LENZ Therapeutics

**Alt names:** aceclidine

**Use:** improve blurry near vision associated with aging 

**Process Type:** Rep/sample

**Specialty (suggested)** : Ophthalmology

**WILL ONLY PROVIDE SAMPLES TO EYE CARE PROVIDERS**

**Timeline:** depends on the date you will set up the meeting

**Process:**

  1. Request a sales rep at : <https://www.vizz.com/ecp> by scrolling to the bottom (or selecting "Contact Us" in top right) and filling out form, checking off "Request contact with LENZ Sales Representative"
  2. A customer support representative from Lenz will contact you to ask for the HCP contact info so that they can forward it to a sales representative.
  3. Once contacted by a rep, they ask if the HCP is willing to meet to go over the details and bring samples.
  4. Lenz contact center : +1 888 711-5369

---

### VTAMA

*Article ID: 42688173266452*

**Brand Name:** VTAMA

**Manufacturer** : Organon

**Alt names:** tapinarof

**Use:** atopic dermatits, plaque psoriasis

**Specialty** : Dermatology

**Process Type:** sample and rep visit

**Timeline:** 2-3 days

**Process:****For dermatology only** . called Organon Service Center at 844-674-3200, CS will ask the HCP’s name, contact number and practice address. <https://organonpro.com/en-us/contact/>

---

### Breztri

*Article ID: 42681670370836*

**Brand Name:** Breztri

**Manufacturer:** AstraZeneca

**Alt Names:** budesonide / glycopyrrolate / formoterol fumarate inhaler

**Uses:** maintenance treatment of patients with chronic obstructive pulmonary disease (COPD)

**Specialty** : Pulmonology

**Process Type** : Samples

**Portal Link:**<https://www.astrazenecasamplecloset.com/login.html>

**Note:** Alternative method for requesting samples is by completing this form: <https://www.astrazeneca-us.com/contact-us/hcp-request-for-pharmaceutical-samples.html>

---

### Xifaxan

*Article ID: 42681018368148*

**Brand Name:** Xifaxan

**Manufacturer** : Salix Pharmaceuticals (Bausch Health Companies)

**Alt names:** Rifaximin

**Use:** To treat traveler's diarrhea

**Process Type:** samples and rep visits

**Timeline:** 1-2 weeks

**Process:**

  1. Gather information required to get a rep assigned to the HCP (Address, Name, NPI, Credentials, practice type, and best phone number for a rep to reach out)
  2. Contact Customer Service via BauschHealth's chat: [https://www.bauschhealth.com/about-us/contact-us/](https://www.bauschhealth.com/about-us/contact-us/)
  3. A representative should reach out within the week via a phonecall. Preferable to also ask the HCP if we can provide their phone number.
  4. Rep will call out via phone, can coordinate with them and confirm any information



May also use Bausch and Lomb rep finder to locate a sales rep:  
<https://repfinder.bausch.com/>

---

### Xofluza

*Article ID: 42596142920724*

**Brand Name:** Xofluza

**Manufacturer** : Genentech (Roche)

**Alt Names:** baloxavir

**Uses:** antiviral for flu

**Portal Link:**[https://hcpsample.com/210/index.html?cc=GNEsample&roomid=3&ac=4038](https://hcpsample.com/210/index.html?cc=GNEsample&roomid=3&ac=4038)

**Important Notes:** This link has a savings card and also a prominent button to the samples portal  
<https://www.xofluza-hcp.com/resources/order-samples.html>

---

### Tremfya

*Article ID: 42596111945876*

**Brand Name:** Tremfya

**Manufacturer** : Johnson & Johnson (Janssen)

**Alt names:** guselkumab

**Use:** Plaque Psoriasis, Psoriatic Arthritis, Ulcerative Colitis, Crohn's Disease

**Specialty** : Dermatology, Rheumatology, Gastroenterology

**Process Type:** Savings/Bridge supply, Sales Rep

**Process:** Bridge Supply/holdover program for patient who have been prescribed Tremfya but are awaiting Prior Auth approval -- Not necessarily for samples  
<https://www.account1.jnjwithme.com/tremfya-withme/account/sign-up/>

**For Sales Rep:**  
**Unconfirmed process******

  1. Go to official Tremfya website <https://www.tremfyahcp.com/>
  2. Select Specialty (Only Rheumatology and Gastroenterology have reps available via webform)
  3. Click "Request a rep" in the top right and fill out webform
  4. Ask about samples availability

---

### Gemtesa

*Article ID: 42596044816148*

**Brand Name:** Gemtesa

**Manufacturer** : Sumitomo Pharma

**Alt Names:** Vibegron

**Uses:** overactive bladder

**Specialty** : Urology

**Important Notes:****Unconfirmed process**

**Portal Link:**<https://sumitomopharmaamerica.mysamplecloset.com/login>

---

### Systane

*Article ID: 42595969976596*

**Brand Name:** Systane

**Manufacturer** : Alcon

**Use:** eye lubricant

**Notes:** Called Alcon and was adviced that they no longer offer samples for systane. 1800-757-9785

---

### Xigduo

*Article ID: 42595905389588*

**Brand Name:** Xigduo

**Manufacturer** : AstraZeneca

**Alt Names:** dapagliflozin and metformin

**Use:** diabetes medicine used, together with diet and exercise in adults with type 2 diabetes

**Notes:** AstraZeneca does not provide samples for Xigduo but does provide samples for Farxiga which contains dapagliflozin. Can suggest Farxiga instead via: https://www.astrazenecasamplecloset.com/login.html?currentPagePath=/content/open-digital/esampling/en/home

---

### Addyi

*Article ID: 42595869984148*

**Brand Name:** Addyi 

**Manufacturer** : Sprout Pharmaceuticals

**Alt Names:** flibanserin

**Use:** treatment for hypoactive sexual desire disorder (HSDD)

**Specialty** : OBGYN, OB/GYN, Gynecology

**Process Type** : Rep

**Notes:** Manufacturer does not provide samples, but you may talk with a rep to discuss education and copay saving options for patients.

**Process** :

  1. Gather office name, email, phone number, and zip code
  2. Fill out form here[: https://addyihcp.com/request-a-rep/](https://addyihcp.com/request-a-rep/)
  3. Rep can reach out and discuss copay savings and patient education options

---

### Breo Ellipta

*Article ID: 42595828376852*

**Brand Name:** Breo Ellipta

**Manufacturer** : GlaxoSmithKline (GSK)

**Alt Names:** Fluticasone furoate / Vilanterol

**Use:** used long term to prevent and control symptoms of asthma for better breathing and to prevent symptoms such as wheezing.

**NO SAMPLES OR REPS AVAILABLE**

**Notes:**<https://hcp-account.gskpro.com/en-XG/login?ref=gskpro>

---

### Contrave

*Article ID: 42595818329876*

**Brand Name:** Contrave

**Manufacturer** : Currax Pharmaceuticals

**Alt names:** Bupropion / Naltrexone

**Use:** Weight loss medicine that adjusts the brain's appetite and reward centers

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Process:****Reach out to Nick, who will reach out to Currax Rep who will find the correct sales rep**

  1. must have HCP name, practice address, practice phone, and NPI for request
  2. Currax contact will reach out with associated area rep's information
  3. outreach to Currax rep for HCP samples/visit



**Alternative Process** :

  1. Call Currax Pharmaceuticals at +18007932145
  2. Request samples and rep visit for Contrave.
  3. Make sure to have HCP practice address ready, Currax customer service will provide you rep names and numbers depending on the area of the HCPs practice.
  4. Talk to HCP to see what is a suitable time for the rep to visit
  5. Talk to rep and coordinate a suitable date. Follow-up weekly if necessary.  
May reach out to Nick if having trouble getting a re

---

### Qbrexza

*Article ID: 42595756799252*

**Brand Name:** Qbrexza

**Manufacturer** : Journey Medical Corporation

**Alt names:** gylcopyrronium cloth 

**Use:** topical cloth for excessive underarm sweat

**Process Type:** sample

**Timeline:** prev request took 2 weeks

**Process:**

  1. Sent an inquiry through Journey Medical email : [contact@jmcderm.com](mailto:contact@jmcderm.com)
  2. A representative from Journey will request for the physician's information and they will enroll him in their e-sampling program. 
  3. Some info needed: Business name, HCP's email, phone #, license number, license state, license expiration, license address, mailing address. 
  4. once you send the info, they will send a digital signature request and letter of affiliation sent to the HCP email after 2 days.

---

### Rexulti

*Article ID: 42595688960404*

**Brand Name:** Rexulti 

**Manufacturer** : Otsuka Pharmaceuticals & Lundbeck LLC

**Alt Names:** Brexpiprazole

**Uses:** atypical antipsychotic medication prescribed to treat major depressive disorder, schizophrenia, and agitation related to dementia due to Alzheimer's disease

**Portal Link:**<https://rexulti.mysamplecloset.com/login>

**Important Notes:** May also request a rep here:  
<https://www.rexultihcp.com/request-a-rep>

---

### Imvexxy

*Article ID: 42595480847508*

**Brand Name:** Imvexxy

**Manufacturer:** Mayne Pharma

**Alt names:** Estradiol vaginal inserts

**Use:** Treatment of moderate to severe dyspareunia (painful sexual intercourse), a symptom of vulvar and vaginal atrophy (VVA) due to menopause.

**Specialty** : Obstetrics & Gynecology (OB/GYN)

**Process Type:** Rep & Samples

**Timeline:** 2-3 weeks

**Process:**

  1. Submit a rep request here: <https://www.imvexxy.com/hcp/support-and-access/>
  2. Follow-up with Mayne Pharma in 1-2 days to make sure the request went through (Practice address will be needed)
  3. Rep will reach out and try to schedule a visit, coordinate with the HCP



**Important Note**

Previous request took longer than supposed to, try to ask if its possible to get connected to a rep directly when re-escalating.

---

### Trijardy

*Article ID: 42595422507028*

**Brand Name:** Trijardy

**Manufacturer** : Eli Lilly & Boehringer Ingelheim

**Alt Names: combination drug** empagliflozin/linagliptin/metformin HCI

**Use:** type 2 diabetes

**Specialty** : Endocrinology

**Notes: No samples available**

---

### Jublia

*Article ID: 42594795860756*

**Brand Name:** Jublia

**Alt names:** efinaconazole

**Use:** Toenail fungal infections

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Process:**

  1. Gather HCP information: Practice Address, Name, NPI, Credentials, practice type, phone number for Bausch rep to reach out to
  2. Contact Customer service via BauschHealth's chat: <https://www.bauschhealth.com/about-us/contact-us/>
  3. A representative should reach out within the week via a phone call --> Preferable to also ask the HCP if we can provide their phone number.
  4. Rep will ask same questions on the phone to verify, and then send a virtual meeting link via email.
  5. Coordinate with HCP and rep to see what the most suitable time would be.



**Alternative process:**

  1. Gather HCP info, including address, and find rep here: Rep finder: <https://repfinder.bausch.com/>

---

### Miebo

*Article ID: 42594236779668*

**Brand Name:** Miebo

**Manufacturer:** Bausch & Lomb

**Alt names:** Perfluorohexyloctane ophthalmic solution 100%

**Use:** Dry eyes

**Specialty** : Ophthalmology, Optometry

**Process Type:** Rep and Samples

**Process:**

  1. Gather HCP info, including address, and find rep here: Rep finder: <https://repfinder.bausch.com/>
  2. once in touch with the rep, inform them HCP is looking for samples
  3. rep will send over form for HCP to fill out and send back
  4. rep will ship samples to HCP

---

### Veozah

*Article ID: 42594120511636*

**Brand Name:** Veozah

**Manufacturer:** Astellas Pharma

**Alt Names:** fezolinetant

**Uses:** NK3 receptor antagonist for hot flashes & night sweats due to menopause

**Specialty** : OBGYN, OB/GYN, Gynecology

**Portal Link:**<https://veozah.mysamplecloset.com/login>

---

### Zofran

*Article ID: 42594096215700*

**Brand Name:** Zofran

**Manufacturer:** Novartis

**Alt Names:** ondansetron

**Use:** nausea and vomiting

**Note** : **samples are not available**

---

### Lunesta

*Article ID: 42594083357972*

**Brand Name:** Lunesta

**Manufacturer:** Sunovion Pharmaceuticals

**Alt Names:** eszopiclone

**Use:** controlled substance; treatment for insomnia  
  
**Notes:** samples are not available.

---

### Opzelura

*Article ID: 42592418508564*

**Brand Name:** Opzelura

**Manufacturer** : Incyte

**Alt names:** ruxolitinib

**Use:** atopic dermatitis, nonsegmental vitiligo

**Process Type:** rep only

**Process:**

  1. Gather HCP practice address
  2. Request rep visit here: <https://www.opzeluraontrachcp.com/contact>



**Events** :

Learning Sessions: <https://www.opzeluraonward.com>

---

### Dupixent

*Article ID: 42592406298260*

**Brand Name:** Dupixent

**Manufacturer:** Sanofi & Regeneron

**Alt names:** dupilumab

**Use:** Asthma, COPD, Atopic Dermatitis

**Process Type:** Rep Visit / Samples

**Timeline:** 1-2 weeks

**Portal Link:**<https://sanofisamplingportal-us.com/authentication/login>

**Alternate Process:**

  1. Gather HCP information including NPI and Practice Address
  2. Call 800-973-3620, provide agent with HCP information
  3. They should be able to inform us if an HCP has samples allocated to them through the sampling portal, including how much the HCP can order and how often
     1. If HCP does not have samples allocated to them, Sanofi will email a form that the HCP can fill out and fax back to them
  4. Once eligibility has been confirmed, inform HCP that they can order through the Sanofi Sampling portal: [sanofisamplingportal-us.com](http://sanofisamplingportal-us.com)



**Alternate Process for Sales rep:**

  1. Gather HCP information including Practice Address and Specialty
  2. Submit information in this link for a sales rep: <https://www.dupixenthcp.com/contact-a-rep>

---

### Vraylar

*Article ID: 42592210714260*

**Brand Name:** Vraylar

**Manufacturer:** AbbVie

**Alt Names:** cariprazine

**Uses:** bipolar disorder, schizophrenia, and depression 

**Specialty** : Psychiatry

**Portal Link:**<https://abbvie.mysamplecloset.com/login>

**Alternative link** : May request a sales rep here <https://www.abbvieaccess.com/request-a-rep>

---

### Xdemvy

*Article ID: 42591991964180*

**Brand** **Name** : Xdemvy

**Manufacturer:** Tarsus Pharmaceuticals

**Alt names:** lotilaner eye drops

**Use:** Demodex blepharitis

**Process Type: Samples**

**Timeline: ~17 days**

**Process:**  
1) Request HCP practice name and address.  
2) (Recommended) Called Customer Service Representative at +18884214002 to expedite the request.  
3) Received an email from the sales representative requesting HCP details.  
4) Rep visit and deliver the sample.

---

### Botox

*Article ID: 42586935589396*

**Brand Name:** Botox

**Alt names:** botulinum toxin type A

**Use:** blocks muscle contraction, can be used for medical & cosmetic purposes

**Process Type:** Rep & Samples

**Timeline:** ~7 days of consistent calling/following up

**Process:**

  1. Call Allergan Aesthetics at 844‑639‑2246
     * If HCP does not already have an account, one will need to be set up with Allergan. In order to do this, they will need the registered business name and EIN, in addition to the HCP information.
  2. Once an account is established, they should be able to give you a local rep to contact
     * They may ask more details before connecting you with the rep
       * what the HCP experience is using Botox
       * what the samples will be used for, etc
     * When presented with these questions, let them know that you are calling on behalf of the HCP but they will better be able to answer those questions once connected with the rep.
  3. Need to obtain the reps contact info OR get permission from HCP to give out their number to be contacted directly.
     * They should be able to get in touch with the rep and discuss sample options.

---

### Upneeq

*Article ID: 42586387094804*

**Brand Name:** Upneeq

**Manufacturer:** RVL Pharmaceuticals

**Alt Names:** oxymetazoline hcl ophthalmic solution

**Uses:** blepharoptosis, low-lying eyelids

**Specialty** : Ophthalmology, Optometry

**Portal Link:**<https://rvlsamplesportal.qpharmacorp.com/>

---

### Jardiance

*Article ID: 42586276786324*

**Brand Name:** Jardiance

**Manufacturer:** Eli Lilly and Boehringer Ingelheim

**Alt Names:** empagliflozin

**Uses:** SGLT-2 inhibitor for type 2 diabetes

**Process:**

  1. Gather HCP information including practice address and HCP Specialty
  2. Submit inquiry through Boehringer Ingelheim medical information page at <https://pro.boehringer-ingelheim.com/us/bi-druginforequest/general-information-request>



**Alternative:** Contact Boehringer Ingelheim directly at [800-243-0127](tel:8002430127) to request samples or Eli Lilly for Jardiance inquiries [800-542-6257](tel:8005426257)

---

### Rybelsus

*Article ID: 42586255347348*

**Brand Name:** Rybelsus

**Manufacturer:** Novo Nordisk

**Alt names:** semaglutide tablet

**Use:** oral GLP-1 receptor agonist for type 2 diabetes

**Process Type:**<https://www.novomedlink.com/samples.html>

**Timeline:** 19 days (5 days when we reached out to reps on LinkedIN)

**Process:** IMPORTANT: these are listed on the portal as “**currently unavailable** ”. The sample program may have ended and we need to double check these are still available before giving this portal out to HCPs.   


Alternative link: <https://www.novomedlink.com/diabetes/samples.html>

**Alternative for a rep:**

  1. Gather HCP name, practice address (including zip code), and office number (if possible)
  2. Call Novo Nordisk at 800-727-6500

---

### Eliquis

*Article ID: 42585662347156*

**Brand Name** : Eliquis

**Manufacturer:** Bristol Meyers Squibb (BMS) and Pfizer

**Alt Names:** apixaban

**Uses:** blood thinner, Direct Oral Anticoagulant (DOAC), Factor Xa inhibitor

**Sample Availability Varies -- HCP may have to check pfizerpro periodically for samples availability**

**No Sales Reps for Eliquis per Pfizer**

**Portal Link:**<https://www.pfizerpro.com/request-samples>

**Important Notes:** Can also call in the request here: [1-800-505-4426](tel:1-800-505-4426)  
Will need HCP address & fax number as a form will have to be faxed and completed by HCP

**Alternatives** : [Xarelto](https://impiricussupport.zendesk.com/hc/en-us/articles/42961389783316)

**Other Resources:**  
Eliquis HCP Resource Website - <http://eliquis.com/eliquis/hcp/resources>  
BMS Customer Connect - [http://eliquis.bmscustomerconnect.com](http://eliquis.bmscustomerconnect.com/)  
Pfizer For All Prescription Assistance - <https://www.pfizerforall.com/savings-support/prescription-assistance>

---

### Ubrelvy

*Article ID: 42585289203604*

**Brand Name** : Ubrelvy

**Manufacturer:** AbbVie

**Alt Names:** ubrogepant

**Uses:** migraine headaches in adults

**Specialty** : Neurology

**Portal Link:**<https://abbvie.mysamplecloset.com/registration>

**Important Notes:**

**Stock may vary**

if any issues with portal, another option: 

<https://www.abbvieaccess.com/brand/ubrelvy>

---

### Linzess

*Article ID: 42585240231060*

**Brand Name:** Linzess

**Manufacturer:** AbbVie and Ironwood Pharmaceuticals

**Alt Names:** linaclotide

**Uses:** Irritable Bowel Syndrome (IBS), chronic constipation

**Specialty** : Gastroenterology

**Portal Link:**<https://abbvie.mysamplecloset.com/login>

**Rep Request Form:**<https://www.abbvieaccess.com/request-a-rep/linzess?product=Linzess>

---

### Farxiga

*Article ID: 42585138603028*

**Brand Name** : Farxiga

**Manufacturer:** AstraZeneca

**Alt Names:** dapagliflozin

**Uses:** SGLT-2 inhibitor for type 2 diabetes, chronic kidney disease, heart failure

**Portal Link:**<https://www.astrazenecasamplecloset.com/login.html>

**Important Notes:**

If the HCP informs you they are having problems, we can request a faxed form BUT USE CAUTION-- **if we mention we are a third party company, the HCP can be deemed ineligible for samples**

---

### Journavx

*Article ID: 42577011888276*

**Brand Name** : Journavx

**Manufacturer:** Vertex

**Alt Names:** suzetrgine

**Uses:** pain management (moderate-to-severe)

**Portal Link:**<https://vertex.mysamplecloset.com/login>

Notes: Per Vertex Employee, may email [pain_marketing@vrtx.com](mailto:pain_marketing@vrtx.com) to be connected with a rep

---

### Wegovy

*Article ID: 42576902989204*

**Brand Name:** Wegovy

**Manufacturer:** Novo Nordisk

**Alt names:** semaglutide

**Use:** GLP-1 receptor agonist for weight loss, cardiovascular risk reduction

**Process Type:****** samples

**Important note: stock varies for samples, may be out of stock when HCP goes to portal**

**Portal Link** : [https://www.novomedlink.com/obesity/samples.html](https://www.novomedlink.com/obesity/samples.html)

**Alternative for a rep:**

  1. Gather HCP name, practice address (including zip code), and office number (if possible)
  2. Call Novo Nordisk at 800-727-6500

---

### Cabtreo

*Article ID: 42576584791572*

**Brand Name:** Cabtreo

**Manufacturer:** Bausch & Lomb

**Alt names:** Combination of three medications: clindamycin phosphate / adapalene / benzoyl peroxide

**Use:** topical acne medication

**Specialty** : Dermatology

**Process Type:** Rep & Samples

**Timeline:** 1-2 weeks

**Notes:****THEY DO NOT PROVIDE SAMPLES FOR PRIMARY CARE OFFICES**

**Process:**

  1. Use the chat box feature on the Bausch Health website here: <https://www.bauschhealth.com/about-us/contact-us/>
  2. Request a rep to bring samples to the HCP.
  3. Follow up 5-7 days later with the HCP to confirm the rep has stopped by with samples.
  4. If the rep has not stopped by, can follow up with the chat and get an update and/or escalate the request.  




May also use Bausch and Lomb rep finder to locate a sales rep:  
<https://repfinder.bausch.com/>

---

### Restasis

*Article ID: 42576209640980*

**Brand name** : Restasis

**Manufacturer:** AbbVie (Allergan)

**Alt names:** cyclosporine

**Use:** chronic dry eyes

**Specialty** : Ophthalmology, Optometry

**Process Type:** samples

**Process:**

  1. collect HCP email for form from rep
  2. call 800-441-4987
  3. the sales rep will need to send a form through the HCP’s email
  4. HCP fills out the form and faxes to number provided on the form
  5. Rep ships out the samples

---

### Olumiant

*Article ID: 42549617543060*

**Brand Name** : Olumiant

**Manufacturer:** Eli Lilly, Incyte

**Alt Names:** baricitinib

**Uses:** JAK inhibitor for rheumatoid arthritis, alopecia areata

**Specialty** : Rheumatology, Dermatology

**Portal Link:**<https://prescriberpoint.com/sample-store/olumiant-866e9f3?prodId=ee9d7c38-cae4-453c-fab5-08dc33eb5dbc>

**Important Notes:**

If the user is new to the portal, they have to have their practice approved by Eli Lilly before being able to place orders. If the HCP tells you they show as ineligible on the portal, notify them that they can use the chat feature to request approval, and then they should be notified once they have been approved, but give them a heads up that this process may take a few weeks.

---

### Freestyle Libre 3

*Article ID: 42549310959252*

**Brand Name:** Freestyle Libre 3

**Manufacturer:** Abbott

**Alternative names:** Freestyle Libre 3 plus

**Use:** Continuous Glucose Monitor (CGM) for testing blood sugar in type 1 or type 2 diabetes

**Process Type:** samples and rep visits

**Timeline:** 1-2 days

**Process:**

  1. Obtain Practice Address from HCP
  2. Call 855-852-4527 and let them know you would like a rep to deliver starter kits to the practice
  3. They should give you contact info for local reps that you will reach out to and request a visit on the HCPs behalf.

---

### Dexcom G7

*Article ID: 42548974252436*

**Brand Name:** Dexcom G7

**Manufacturer:** Novo Nordisk

**Use:** Continuous Glucose Monitor (CGM) for type 1 or 2 diabetes or diabetes

**Process Type:** Rep, Samples, & Education

**Timeline:** <2 weeks (when in stock)

**Process:**

1\. Fill out a contact form with the desired resource(s) selected here: <https://provider.dexcom.com/g7-personal-cgm>

2\. For samples, will be emailed shipping info that can be given to HCP. For other updates, email: clinics@dexcom.com (inactive email). For pending confirmation of proper email: professionaltechsupport@dexcom.com

---

### Nurtec ODT

*Article ID: 42548986169620*

**Brand Name:** Nurtec ODT

**Manufacturer:** Pfizer

**Alternative Names:** rimegepant

**Uses:** migraine headaches

**Specialty** : Neurology, Primary Care, Family Medicine

**Portal Link** : [https://www.pfizerpro.com/request-samples](https://www.pfizerpro.com/request-samples) HCP may periodically check availability

**Alternative Process** : 

  1. Gather HCP Practice Address
  2. Call PfizerPRO: 1-800-505-4426 to outreach to sales rep
  3. Check availability of Nurtec for HCP's region



**May be unavailable: Stock varies by region**

**Important Notes:**

**May be unavailable: Stock varies by region**

**Availability may reset every Quarter**

---

### Zepbound

*Article ID: 42548605139348*

**Brand name** : Zepbound

**Manufacturer** : Eli Lilly

**Alt names:** tirzepatide

**Use:** Obesity, Overweight with comorbidity, or moderate-to-severe sleep apnea

**Process Type:** Rep & **Demo Kit only**  
**do not offer samples currently**

**Timeline:** <2 weeks

**Important Note** : IF YOU OFFER A DEMO KIT: Let HCP know that we can place the request for them, but Lilly has been known to have supply difficulties with demo kits for this product and as a result is not very reliable with fulfillment or responding to our follow ups once we place the request. We are still happy to place the request on their behalf and attempt to follow up as needed, but unfortunately we cannot guarantee the delivery of this item.

**Process:****DOES NOT OFFER SAMPLES**

  1. Gather HCP information including Practice name and Practice Address
  2. Request a demo kit and/or rep visit here: <https://zepbound.lilly.com/hcp/getting-patients-started>
  3. Follow up with HCP in 5-7 days to ensure they arrived

---

### Ozempic

*Article ID: 42548527646868*

**Brand Name** : Ozempic

**Manufacturer** : Novo Nordisk

**Alt Names:** semaglutide

**Uses:** injectable GLP-1 receptor agonist for type 2 diabetes

**Portal Link:**<https://www.novomedlink.com/diabetes/samples.html>

---

### Anzupgo

*Article ID: 42548529952916*

**Brand Name** : Anzupgo

**Manufacturer** : LEO Pharma

**Alternative names:** delgocitinib

**Use:** treatment for eczema

**Specialty** : Dermatology

**Process Type:** rep visit only

**Timeline:** <1 week

**Process:**

1\. Fill out the form: <https://www.anzupgohcp.com/contact-us>

2\. Follow up with HCP to ensure rep got in contact

---

### Mounjaro

*Article ID: 42511663019156*

**Brand Name** : Mounjaro

**Manufacturer** : Eli Lilly

**Alternative Names** : tirzepatide

**Use:** GLP-1 receptor agonist for type 2 diabetes (not for weight loss)

**Process Type** : Rep & Samples 

**Notes** :******Our requests here often do not result in any communication from the manufacturer**

**Process** :

  1. Gather Practice Name, Practice Address, HCP Specialty
  2. fill out form for Rep Visit/Demo Kit:****[**https://mounjaro.lilly.com/hcp/request-resources**](https://mounjaro.lilly.com/hcp/request-resources)
  3. If you DO NOT immediately get a rejection (usually within an 1 hour):
     1. Let the HCP know that requests can take 3-4 weeks, but we won't get any updates
     2. Send them the rep request link online and let them know they can always resubmit themselves as well
  4. IF YOU GET A REJECTION:
     1. If you DO get a rejection immediately (usually immediate or within 1 hour):
        1. Let the HCP know they were rejected for samples
        2. Let them know you will escalate to Eli Lilly, but that we haven't had any contact back from a rep so we won't be able to update them
        3. send them the request link so they can resubmit themselves later if they would like to.

---

