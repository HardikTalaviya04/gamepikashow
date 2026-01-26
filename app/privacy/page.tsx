// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// export default function AboutUsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <Header />
//       <main className="max-w-6xl mx-auto px-6 py-16">
//         <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
//           <div className="mb-12 text-center">
//             <h1 className="text-6xl font-bold text-white mb-4">Privacy Policy</h1>
//             <p className="text-slate-300 text-lg">Your privacy is our priority</p>
//             <p className="text-slate-400 text-sm">Last updated: November 2024</p>
//           </div>

//           {/* Content Sections with Glassmorphism */}
//           <div className="space-y-8">
//             {/* Introduction */}
//             <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
//               <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
//               <p className="text-slate-200 leading-relaxed">
//                 PikaShowGames ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
//                 we collect, use, disclose, and safeguard your information when you visit our website and use our services.
//               </p>
//             </section>

//             {/* Information We Collect */}
//             <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
//               <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
//                     Personal Information
//                   </h3>
//                   <ul className="text-slate-200 leading-relaxed space-y-3">
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Email address</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Name and username</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Account preferences and settings</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Payment information (processed securely)</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
//                     Automatically Collected Information
//                   </h3>
//                   <ul className="text-slate-200 leading-relaxed space-y-3">
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Browser and device information</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>IP address and location data</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Cookies and tracking technologies</span>
//                     </li>
//                     <li className="flex items-start gap-3">
//                       <span className="text-pink-400 mt-1">•</span>
//                       <span>Usage patterns and gameplay data</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* How We Use Your Information */}
//             <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
//               <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
//               <p className="text-slate-200 leading-relaxed mb-6">We use the information we collect to:</p>
//               <ul className="text-slate-200 leading-relaxed space-y-3">
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Provide, maintain, and improve our services</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Process transactions and send related information</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Send promotional communications (with your consent)</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Prevent fraudulent transactions and enhance security</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Comply with legal obligations</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-purple-400 font-bold">✓</span>
//                   <span>Analyze usage patterns to improve user experience</span>
//                 </li>
//               </ul>
//             </section>

//             {/* Data Security */}
//             <section className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-300/30 rounded-2xl p-8 hover:border-purple-300/50 transition-all duration-300">
//               <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
//                 <span className="text-purple-400">🔐</span>
//                 Data Security
//               </h2>
//               <p className="text-slate-200 leading-relaxed">
//                 We implement industry-standard security measures to protect your personal information. However, no method
//                 of transmission over the internet is 100% secure. While we strive to protect your data, we cannot
//                 guarantee absolute security.
//               </p>
//             </section>

//             {/* Your Rights */}
//             <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
//               <h2 className="text-3xl font-bold text-white mb-4">Your Rights</h2>
//               <p className="text-slate-200 leading-relaxed mb-6">You have the right to:</p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
//                   <p className="text-slate-200 flex items-start gap-2">
//                     <span className="text-pink-400 mt-1">→</span>
//                     <span>Access your personal information</span>
//                   </p>
//                 </div>
//                 <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
//                   <p className="text-slate-200 flex items-start gap-2">
//                     <span className="text-pink-400 mt-1">→</span>
//                     <span>Request corrections to inaccurate data</span>
//                   </p>
//                 </div>
//                 <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
//                   <p className="text-slate-200 flex items-start gap-2">
//                     <span className="text-pink-400 mt-1">→</span>
//                     <span>Request deletion of your data (subject to legal requirements)</span>
//                   </p>
//                 </div>
//                 <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
//                   <p className="text-slate-200 flex items-start gap-2">
//                     <span className="text-pink-400 mt-1">→</span>
//                     <span>Opt-out of marketing communications</span>
//                   </p>
//                 </div>
//                 <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
//                   <p className="text-slate-200 flex items-start gap-2">
//                     <span className="text-pink-400 mt-1">→</span>
//                     <span>Withdraw consent at any time</span>
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Contact Us */}
//             <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-8">
//               <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
//               <p className="text-slate-200 leading-relaxed mb-6">
//                 If you have questions about this Privacy Policy or our privacy practices, please contact us at:
//               </p>
//               <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
//                 <p className="text-white font-semibold text-lg">PikaShowGames Privacy Team</p>
//                 <p className="text-slate-300 flex items-center gap-2 overflow-scroll">
//                   <span className="text-purple-400">📧</span>
//                   Email: radhesoftwaresolutions2025@gmail.com
//                 </p>
//                 <p className="text-slate-300 flex items-center gap-2">
//                   <span className="text-purple-400">⏱️</span>
//                   Response time: Within 5 business days
//                 </p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>


//   )
// }








import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <div className="mb-12 text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-lg">Your privacy is our priority</p>
            <p className="text-slate-400 text-sm">Last updated: November 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">

            {/* Introduction */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-slate-200 leading-relaxed">
                PikaShowGames ("we," "our," or "us") respects your privacy and is committed to protecting your
                personal data. This Privacy Policy explains how we collect, use, store, and protect your information
                when you access our website, play games, or use our services. This policy complies with GDPR
                (EU), CCPA (California).
              </p>
            </section>

            {/* Information We Collect */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Personal Info */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Personal Information (Provided by You)
                  </h3>
                  <ul className="text-slate-200 leading-relaxed space-y-3">
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Email address</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Name or Username</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Profile photo (if chosen)</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Account settings & preferences</li>
                  </ul>
                </div>

                {/* Auto collected */}
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Automatically Collected Information
                  </h3>
                  <ul className="text-slate-200 leading-relaxed space-y-3">
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>IP address & general location</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Browser type, device model, OS</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Cookies, local storage & tracking data</li>
                    <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Game usage patterns & recently played games</li>
                  </ul>
                </div>
              </div>

              {/* Firebase Data */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">Information Collected Through Firebase</h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  We use Google Firebase Authentication and Firestore for user accounts and gameplay features.
                </p>

                <ul className="text-slate-200 leading-relaxed space-y-3">
                  <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Firebase Authentication stores login data (email, UID).</li>
                  <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Firestore stores user favorites and recently played games.</li>
                  <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">•</span>Your data is stored securely on Google Cloud servers.</li>
                </ul>
              </div>

            </section>

            {/* How We Use Your Information */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>

              <p className="text-slate-200 leading-relaxed mb-6">
                Your data helps us operate, improve, and secure our platform. This includes:
              </p>

              <ul className="text-slate-200 leading-relaxed space-y-3">
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Account creation and login functionality</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Saving favorites & game history</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Improving gameplay & user experience</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Preventing fraud, spam, and abuse</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Ad delivery and personalized content (Adsense)</li>
                <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">✓</span>Analytics and performance tracking</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Cookies & Tracking Technologies</h2>

              <p className="text-slate-200 leading-relaxed mb-4">
                We use cookies and LocalStorage to enhance your experience. This includes:
              </p>

              <ul className="text-slate-200 leading-relaxed space-y-3">
                <li>• Saving your session and login state (Firebase Auth)</li>
                <li>• Showing personalized ads (AdSense cookies)</li>
                <li>• Analytics (traffic, gameplay stats, device info)</li>
                <li>• Remembering recently played games</li>
              </ul>

              <p className="text-slate-300 mt-4">
                You can disable cookies in your browser at any time.
              </p>
            </section>

            {/* Google AdSense & Third Parties */}
            <section className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-300/30 rounded-2xl p-8 hover:border-purple-300/50 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Third-Party Services & Ad Providers</h2>

              <p className="text-slate-200 leading-relaxed mb-6">
                We use third-party services to operate our platform. These include:
              </p>

              <ul className="text-slate-200 leading-relaxed space-y-3">
                <li>• Google Firebase (Authentication & Database)</li>
                <li>• Google Analytics (Usage statistics)</li>
                <li>• Google AdSense (Advertising & personalization)</li>
              </ul>
            </section>

            {/* Rights */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>

              <p className="text-slate-200 leading-relaxed mb-6">
                Depending on your location, you may have the following rights:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200">→ Access your personal information</p>
                </div>

                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200">→ Request data deletion (GDPR/CCPA)</p>
                </div>

                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200">→ Request correction of inaccurate information</p>
                </div>

                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200">→ Opt-out of personalized ads (AdSense)</p>
                </div>

                <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-lg p-4">
                  <p className="text-slate-200">→ Request export of your Firebase data</p>
                </div>
              </div>

              <p className="text-slate-300 mt-6">
                You may contact us anytime to request these changes.
              </p>

            </section>

            {/* Contact */}
            <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                For questions about this Privacy Policy or your data rights:
              </p>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
                <p className="text-white font-semibold text-lg">PikaShowGames Privacy Team</p>
                <p className="text-slate-300 flex items-center gap-2 overflow-scroll">
                  <span className="text-purple-400">📧</span>
                  Email: radhesoftwaresolutions2025@gmail.com
                </p>
                <p className="text-slate-300 flex items-center gap-2">
                  <span className="text-purple-400">⏱️</span>
                  Response time: Within 5 business days
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
