'use client'

import { motion } from 'framer-motion'
import { PageLayout } from '@/components/PageLayout'
import { Shield, Database, Eye, Globe, Lock, User } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                RELIABLE SMART SOLUTION PRIVACY STATEMENT
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                RELIABLE SMART SOLUTION, and its subsidiaries or Parent Companies (collectively “RELIABLE”) are committed to protecting your privacy and providing you with a positive experience on our websites and in using our products and services (“Solution” or “Solutions”).
              </p>

              <p className="text-sm text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Structured Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-3 text-blue-400">Overview</h2>
              <p className="text-gray-300">This Privacy Statement applies to RELIABLE websites and Solutions that link to or references this Statement and describes how we handle personal information and the choices available to you regarding collection, use, access, and how to update and correct your personal information. Additional information on our personal information practices may be provided in offer descriptions, supplemental privacy statements, or notices provided prior to or at the time of data collection. Certain RELIABLE parent or subsidiary websites may have their own privacy statement that describes how we handle personal information for those websites specifically. To the extent a notice provided at the time of collection or a website or Solution specific privacy statement conflicts with this Privacy Statement, such specific notice or supplemental privacy statement will control.
</p>
            </motion.div>

            {/* Collection */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Collection of Personal Information</h3>
              </div>

              <p className="text-gray-300 mb-3"> We may collect data, including personal, device information, about you as you use our websites and Solutions and interact with us. “Personal information” is any information that can be used to identify an individual, and may include name, address, email address, phone number, login information (account number, password), marketing preferences, social media account information, or payment card number. If we link other data with your personal information, we will treat that linked data as personal information. We also collect personal information from trusted third-party sources and engage third parties to collect personal information to assist us.
</p><p>We collect personal information for a variety of reasons, such as:
</p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Processing your order, including payment transactions.</li>
                <li>Providing you with a newsletter subscription.</li>
                <li>Sending marketing communications.</li>
                          <li>Creating an account.</li>
                <li>Enabling the use of certain features of our Solutions.</li>
                <li>Personalizing your experience.</li>
                <li>Providing customer service.</li>
                <li>Managing a job application.</li>
              </ul>
              

              <p className="text-gray-300 mt-3">Collecting information during the testing admissions process when a computer-based certification test is administered to you.
</p>
          <p className="text-gray-300 mt-3">We and the third parties we engage may combine the information we collect from you over time and across our websites and Solutions with information obtained from other sources. This helps us improve its overall accuracy and completeness and helps us better tailor our interactions with you.</p>

           <p className="text-gray-300 mt-3">If you choose to provide RELIABLE with a third party’s personal information (such as name, email, and phone number), you represent that you have the third party’s permission to do so. Examples include forwarding reference or marketing material to a friend or sending job referrals. Third parties may unsubscribe from any future communication following the link provided in the initial message. In some instances, RELIABLE and the third parties we engage may automatically collect data through cookies, web logs, web beacons, and other similar applications. This information is used to better understand and improve the usability, performance, and effectiveness of the website and to help tailor content or offers for you.
</p>

            <p className="text-gray-300 mt-3">When you use parts of the Service that require Hardware, we may collect Information from that Hardware, such as model and serial number, Hardware activity logs, and historic and current Hardware configuration. We also collect usage data from your Hardware, such as what devices are plugged into the Hardware, the location of the Hardware, whether Hardware is in dimmable mode or is in use, and how much electricity is being consumed by devices plugged into any Hardware.
</p>
            </motion.div>

            {/* Uses */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                
                <h3 className="text-xl font-bold mb-3 text-blue-400">Uses of Your Personal Information</h3>
              </div>

              <p className="text-gray-300 mb-3">We may use your personal information for the purposes…</p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Operating our business, delivering, improving, and customizing our websites, mobile applications and Solutions</li>
                <li>Sending marketing and other communications related to our business, and for other legitimate purposes permitted by applicable law.
</li>
                <li>Delivering a Solution you have requested.</li>
                <li>Analyzing, supporting, and improving our Solutions and your online experience.</li>
                <li>Personalizing websites, newsletters and other communications.</li>
                <li>Administering and processing your certification exams.
</li>
                <li>Sending communications to you, including for marketing or customer satisfaction purposes, either directly from RELIABLE or from our partners.
</li>
              </ul>

              <p className="text-gray-300 mt-3">You can edit your communication preferences at any time. See Your Choices and Selecting Your Communication Preferences below.</p>
              <p className="text-gray-300 mt-3">In general, RELIABLE may use your Registration Data and/or other information or data we receive or collect, as well as data we derive or infer from combinations of the foregoing, for a variety of purposes, such as:
</p>
  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To facilitate the creation of and secure your account on the Service.</li>
                <li>To customize and personalize the advertising and other content we deliver to you both on the Service and via partners. We use this information to provide you with relevant and interesting advertising and other content.</li>
                <li>To measure and analyze Service usage and enhance the user experience on our Service. This helps us continue to build a better Service for you.</li>
                <li>To send you information that you agreed to receive.</li>
                <li>To pay third party fees for the content you see in the app.</li>
                <li>Email Address: We may work with data partners and advertising platforms to help increase the relevancy of ads we provide to our listeners. In doing so, we may use information representing an encrypted or hashed value derived from information we have received, such as your email address, in connection with these partners and platforms.</li>
              </ul>
              <p className="text-gray-300 mt-3">The Service may share information we receive or collect in a variety of ways, such as: Sharing of Personally Identifiable Information: We do not share personally identifiable information with third parties other than as described in this policy. However, we may share your information, including personally identifiable information, in order to (i) protect or defend the legal rights or property of RELIABLE, or the legal rights of our business partners, employees, agents, and contractors (including enforcement of our agreements); (ii) protect the safety and security of RELIABLE users or members of the public including acting in urgent circumstances; (iii) protect against fraud or to conduct risk management; or (iv) comply with the law, legal process, or legal requests. Additionally, we may share your data, including any personally identifiable information, with our successor in interest in the event of a corporate reorganization, merger, or sale of all or substantially all of our assets.
</p>
              <p className="text-gray-300 mt-3">Sharing of device data: RELIABLE may share information from devices you use to access the Service with its advertising and other partners. We share this information for a variety of purposes such as advertising frequency capping, tracking advertising conversion events, estimating the number of unique users, security and fraud detection, targeted advertising, debugging problems with the Service, and for providing you with more relevant advertisements.
</p>
              <p className="text-gray-300 mt-3">Sharing of Anonymised, Non-Personally Identifiable or Aggregated Data: RELIABLE may share with third parties, advertisers, and/or business partners anonymised, non-personally identifiable, or aggregated data we receive or collect, such as de-identified Registration Data, Content Data and Device Data. We share such information for a variety of reasons, such as to analyse Service usage, improve the Service, improve the serving of advertisements, or for other purposes. The use and disclosure of such anonymised, non-personally identifiable, or aggregated information is not subject to any restrictions under this policy.
</p>
             <p className="text-gray-300 mt-3">Information You Disclose in a Public Profile or in Public Forums: The RELIABLE Service offers publicly accessible and available pages on social media platforms. You should be aware that any information you provide or post in these areas may be read, collected, and used by others who access them. If your profile is public, any information you place in your user profile, including biographical information, the people you are following, and the people whom you allow to follow you, may be read, collected, and used by others who access them. To request removal of such information from our public forums, contact us at support@reliableautomation.in.

</p>
            </motion.div>

            {/* Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
            
                <h3 className="text-xl font-bold mb-3 text-blue-400">How We Share Information</h3>
              </div>

              <p className="text-gray-300 mb-3">We do not sell personally identifiable information for marketing. We may share information in the following ways:</p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>With RELIABLE parent companies and subsidiaries for data processing or storage.</li>
                <li>With service providers and vendors who help deliver our Solutions (payment processors, hosting providers, customer support vendors).</li>
                <li>With business partners for joint services or promotions (with opt-out options where applicable).</li>
                <li>To comply with legal obligations, respond to lawful requests, or protect rights and safety.</li>
                <li>In connection with corporate transactions (merger, sale, financing).</li>
                <li>In anonymised or aggregated form that cannot reasonably identify you.</li>
              </ul>

              <p className="text-gray-300 mt-3">Device data may be shared with advertising and analytics partners to support advertising frequency capping, conversion tracking, fraud detection, and debugging.</p>
            </motion.div>

            {/* Access & Accuracy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">

                <h3 className="text-xl font-bold mb-3 text-blue-400">Access to and Accuracy of Your Personal Information
</h3>
              </div>

              <p className="text-gray-300 mb-3">We need your help in keeping your personal information accurate and up to date. We provide a number of options to access, correct, suppress, or delete your personal information:
</p>
              <p className="text-gray-300 mb-3">You can view or edit your personal information and preferences by using the account section of your profile.

</p>
              <p className="text-gray-300 mb-3">Some RELIABLE entities may act as or be considered “data controllers”. When a RELIABLE entity is acting as a data controller, you can exercise your rights of access and request corrections, suppression, or deactivations under applicable data protection laws directly with that RELIABLE entity by writing to support@reliableautomation.in.</p>
              <p className="text-gray-300 mb-3">If you need additional assistance, or help with accessing, correcting, suppressing, or deleting your personal information, please feel free to contact us directly. We make good faith efforts to honor reasonable requests to access, delete, update, suppress, or correct your data. We will respond to your request within 30 days. If we are unable to honor your request, we will provide you with an explanation.
</p>
            </motion.div>

            {/* Choices */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Your Choices and Selecting Your Communication Preferences
</h3>
              <p className="text-gray-300 mb-3">We give you the choice of receiving a variety of information related to our Solutions. You can manage your communication preferences through the following methods:
 By following the instructions included in each promotional email from us to unsubscribe from that particular mailing.</p>
              <p className="text-gray-300 mb-3">By sending us a message through email or by mail to: RELIABLE SMART SOLUTION, M-102, S G Business Hub, 3GRH+V8P, Vasant Nagar, Ognaj, Ahmedabad, Gujarat 380081</p>

             <p className="text-gray-300 mb-3">Please be sure to include your name, email address, and specific, relevant information about the material you no longer wish to receive.</p>

             <p className="text-gray-300 mb-3">These choices do not apply to service notifications or other required communications that are considered part of certain Solutions, which you may receive periodically unless you stop using or cancel the Solution in accordance with its terms and conditions. With your permission, we may also share your personal information with RELIABLE business partners or vendors, so they may send you information about products or services that may be of interest to you. To opt-out of this sharing with third parties for their marketing purposes, click here.</p>

             <p className="text-gray-300 mb-3">By using our websites, Solutions, or otherwise providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use. For example, if we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our websites, by sending an email, or otherwise contacting you through mobile.</p>
    
            </motion.div>


             {/* Sharing Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Sharing Your Personal Information</h3>

              <p className="text-gray-300 mb-3">We may share your personal information with third parties for the purposes of operating our business, delivering, improving, and customizing our Solutions, sending marketing and other communications related to our business, and for other legitimate purposes permitted by applicable law or otherwise with your consent.</p>
              <p className="text-gray-300 mb-3">We may share personal information in the following ways:</p>
 
 <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Within RELIABLE and its parent companies or subsidiaries for purposes of data processing or storage.</li>
                <li>With RELIABLE business partners or vendors, so that they may share information with you about their products or services. To opt-out of RELIABLE sharing with third parties for their marketing purposes. </li>
                <li>With business partners, service vendors, authorized third-party agents, or contractors to provide a requested Solution, service or transaction. Examples include, but are not limited to: processing of orders and credit card transactions, hosting websites, hosting seminar registration, assisting with sales-related efforts or post-sales support, and providing customer support.</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, consolidation or restructuring, financing, or acquisition of all or a portion of our business by or to another company.  In response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation or legal process.
</li>
                <li>With law enforcement officials, government authorities, or other third parties as necessary to comply with legal process or meet national security requirements; protect the rights, property, or safety of RELIABLE, its business partners, you, or others; or as otherwise required by applicable law.</li>
                <li>In aggregated and/or anonymised form which cannot reasonably be used to identify you.</li>
                <li>If we otherwise notify you and you consent to the sharing.</li>
              </ul>
    
            </motion.div>

            {/* Security*/}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
            
                <h3 className="text-xl font-bold text-blue-400">Security of Your Personal Information</h3>
              </div>
              <p className="text-gray-300 mb-3">We intend to protect the personal information entrusted to us and treat it securely in accordance with this Privacy Statement. RELIABLE implements physical, administrative, and technical safeguards designed to protect your personal information from unauthorized access, use, or disclosure. We also contractually require that our suppliers protect such information from unauthorized access, use, and disclosure. The Internet, however, cannot be guaranteed to be 100% secure, and we cannot ensure or warrant the security of any personal information you provide to us.</p>

            </motion.div>

               {/*Retention */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
            
                <h3 className="text-xl font-bold text-blue-400">Retention of Personal Information
</h3>
              </div>
              <p className="text-gray-300 mb-3">We will retain your personal information as needed to fulfill the purposes for which it was collected. We will retain and use your personal information as necessary to comply with our business requirements, legal obligations, resolve disputes, protect our assets, and enforce our agreements.
</p>

            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Use of Cookies and other Web Technologies
</h3>
              <p className="text-gray-300 mb-3">Like many websites, RELIABLE uses automatic data collection tools, such as cookies, embedded web links, and web beacons. These tools collect certain standard information that your browser sends to our website. Examples include your browser type and the address of the website from which you arrived at our website.</p>
              <p className="text-gray-300 mb-3">They may also collect information about:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Your Internet Protocol (IP) address. This is a number automatically assigned to your computer or device whenever you connect to the Internet. It is a unique address assigned by your Internet service provider or IT department on a TCP/IP network. Among other things, the IP address allows web servers to locate and identify your device.</li>
                <li>Click stream behavior. This includes, for example, the pages you view and the links you click. These tools help make your visit to our website easier, more efficient, and more valuable by providing you with a customized experience and recognizing you when you return.</li>
              </ul>

              <p className="text-gray-300 mt-3">Some web browsers may give you the ability to enable a “do not track” feature that sends signals to the websites you visit, indicating that you do not want your online activities tracked. This is different from blocking or deleting cookies, as browsers with a “do not track” feature enabled may still accept cookies.</p>
              <p className="text-gray-300 mb-3">No industry standard currently exists on how companies should respond to “do not track” signals, although one may develop in the future. RELIABLE websites do not currently recognize and respond to “do not track” signals. If we do in the future, we will describe how in this Privacy Statement. Learn more information about “do not track”.</p>
             <p className="text-gray-300 mb-3">We partner with third parties to display advertising on our website or to manage our advertising on other sites. Our third-party partners may use cookies or similar technologies in order to provide you with advertising based on your browsing activities and interests. You may opt out of this advertising.</p>
            </motion.div>

            {/* Linked sites */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Linked Sites, Forums & Children</h3>

              <p className="text-gray-300 mb-3">We may provide links to other third-party websites and services that are outside our control and not covered by this Privacy Statement. We encourage you to review the privacy statements posted on those websites (and all websites) you visit.</p>


            </motion.div>

                        {/* Forum & Chatrooms */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Forum & Chatrooms</h3>

              <p className="text-gray-300 mb-3">If you participate in a discussion forum, local communities, or chat room on a RELIABLE website, you should be aware that the information you provide there (i.e. your public profile) will be made broadly available to others, and could be used to contact you, send you unsolicited messages, or for purposes neither RELIABLE nor you have control over. Also, please recognize that individual forums and chat rooms may have additional rules and conditions. RELIABLE is not responsible for the personal information or any other information you choose to submit in these forums. To request removal of your personal information from our blog or community forum, contact us at support@reliableautomation.in. In some cases, we may not be able to remove your personal information, in which case we will let you know if we are unable to do so and why.</p>


            </motion.div>

                        {/* Children’s Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400">Children’s Privacy</h3>

              <p className="text-gray-300 mb-3">RELIABLE encourages parents and guardians to take an active role in their children’s online activities. RELIABLE does not knowingly collect personal information from children without appropriate parental or guardian consent. If you believe that we may have collected personal information from someone under the applicable age of consent in your country without proper consent, please let us know using the methods described in the Contact Us section and we will take appropriate measures to investigate and address the issue promptly.</p>


            </motion.div>

            {/* Contact & Updates */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-400">How to Contact Us</h3>

              <p className="text-gray-300 mb-3">We value your opinions. Should you have questions or comments related to this Privacy Statement, please email our privacy team at support@reliableautomation.in.</p>
              <p className="text-gray-300 mb-3">Alternatively, write to: RELIABLE SMART SOLUTION, M-102, S G Business Hub, 3GRH+V8P, Vasant Nagar, Ognaj, Ahmedabad, Gujarat 380081
</p>

              <div className="space-y-2 text-gray-300">
                <div>
                  <span className="text-gray-400">Postal:</span>
                  <span className="ml-2">RELIABLE SMART SOLUTION, M-102, S G Business Hub, 3GRH+V8P, Vasant Nagar, Ognaj, Ahmedabad, Gujarat 380081</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="ml-2">+91 79908 08715</span>
                </div>
              </div>

              <p className="text-gray-300 mt-4">We may update this Privacy Statement from time to time. If we modify our Privacy Statement, we will post the revised version here, with an updated revision date. You agree to visit these pages periodically to be aware of and review any such revisions. If we make material changes to our Privacy Statement, we may also notify you by other means prior to the changes taking effect, such as by posting a notice on our websites or sending you a notification. By continuing to use our website after such revisions are in effect, you accept and agree to the revisions and to abide by them.
</p>
            </motion.div>

          </div>
        </section>
      </div>
    </PageLayout>
  )
}
