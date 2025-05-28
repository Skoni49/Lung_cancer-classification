import React from "react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Lung Cancer Classification - Pricing Plans
      </h1>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Free</h2>
          <p className="text-gray-500 mb-4">$0 / month</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li>✅ 1 image / day</li>
            <li>✅ Instant response</li>
            <li>❌ No diagnosis history</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-xl">
            Start for Free
          </button>
        </div>

        {/* Basic Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-500">
          <h2 className="text-2xl font-bold mb-2">Basic</h2>
          <p className="text-gray-500 mb-4">$9.99 / month</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li>✅ 30 images / month</li>
            <li>✅ High result accuracy</li>
            <li>✅ History of last 10 diagnoses</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
            Subscribe Now
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Pro</h2>
          <p className="text-gray-500 mb-4">$29.99 / month</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li>✅ Unlimited diagnoses</li>
            <li>✅ Detailed PDF reports</li>
            <li>✅ Smart recommendations</li>
            <li>✅ Email support</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-xl">
            Subscribe to Pro
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
          <p className="text-gray-500 mb-4">Contact us</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-700">
            <li>✅ Hospital integration</li>
            <li>✅ Custom API access</li>
            <li>✅ Bulk diagnoses</li>
            <li>✅ Model training on your data</li>
          </ul>
          <button className="w-full bg-blue-700 text-white py-2 rounded-xl">
            Get a Quote
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 text-center text-sm text-gray-500">
        <p>
          Payment Methods: Visa / MasterCard, PayPal, Bank Transfer (for
          organizations)
        </p>
        <p className="mt-2">🔒 All data is 100% secure and encrypted</p>
      </div>
    </div>
  );
}
