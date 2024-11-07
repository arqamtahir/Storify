import React from 'react';

export default function Pricing() {
  const plans = [
    {
      id: 'hobby',
      title: 'Hobby',
      price: '$29',
      description: 'The perfect plan if you\'re just getting started with our product.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
      ],
      linkText: 'Get started today',
      bgColor: 'bg-gradient',
      textColor: 'text-indigo-600',
      priceTextColor: 'text-dark',
      buttonTextColor: 'text-indigo-600',
      borderColor: 'ring-gray-900/10',
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: '$99',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
      ],
      linkText: 'Get started today',
      bgColor: 'bg-primary-7',
      textColor: 'text-indigo-400',
      priceTextColor: 'text-dark',
      buttonTextColor: 'text-indigo-400',
      borderColor: 'ring-gray-900/10',
    },
    {
      id: 'professional',
      title: 'Professional',
      price: '$59',
      description: 'Ideal for small businesses looking to grow their customer base.',
      features: [
        '50 products',
        'Up to 25,000 subscribers',
        'Enhanced analytics',
        'Priority support response',
        'Email marketing automation',
      ],
      linkText: 'Get started today',
      bgColor: 'bg-gradient',
      textColor: 'text-indigo-600',
      priceTextColor: 'text-dark',
      buttonTextColor: 'text-indigo-600',
      borderColor: 'ring-gray-900/10',
    },
  ];

  return (
    <div className="relative isolate bg-base w-full  px-3 py-16 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient opacity-30"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        ></div>
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-2 lg:text-6xl font-semibold tracking-tight text-dark text-3xl">
          Choose the right plan for you
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-light sm:text-xl">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 sm:mt-20 sm:gap-y-0 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-8 ${plan.bgColor} shadow-md ring-1 ${plan.borderColor}`}
          >
            <h3 className={`text-base font-semibold ${plan.textColor}`}>{plan.title}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={`text-5xl font-semibold tracking-tight ${plan.priceTextColor}`}>
                {plan.price}
              </span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base text-gray-600">{plan.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg className="h-6 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ${plan.buttonTextColor} ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600`}
            >
              {plan.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
