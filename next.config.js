/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-training-in-bangalore',
        destination: '/data-science-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-online-training-in-bangalore',
        destination: '/data-science-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-course-online-in-bangalore',
        destination: '/data-science-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-course-in-bangalore',
        destination: '/data-science-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-in-bangalore',
        destination: '/machine-learning-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-online-in-bangalore',
        destination: '/machine-learning-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-online-training-in-bangalore',
        destination: '/machine-learning-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-training-in-bangalore',
        destination: '/machine-learning-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-bangalore',
        destination: '/data-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-training-in-bangalore',
        destination: '/data-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-online-in-bangalore',
        destination: '/data-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/business-analytics-course-in-bangalore',
        destination: '/business-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/business-analytics-training-in-bangalore',
        destination: '/business-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-in-bangalore',
        destination: '/artificial-intelligence-ai-course-training-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-online-in-bangalore',
        destination: '/artificial-intelligence-ai-course-training-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-online-training-in-bangalore',
        destination: '/artificial-intelligence-ai-course-training-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-training-in-bangalore',
        destination: '/artificial-intelligence-ai-course-training-bangalore',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-course-in-pune',
        destination: '/data-science-course-training-in-pune/',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-in-pune',
        destination: '/machine-learning-course-training-in-pune',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-pune',
        destination: '/data-analytics-course-training-in-pune',
        permanent: true,
      },{
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/business-analytics-course-in-pune',
        destination: '/business-analytics-course-training-in-pune',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-course-in-delhi',
        destination: '/data-science-course-training-in-delhi/',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-in-delhi',
        destination: '/machine-learning-course-training-in-delhi',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-delhi',
        destination: '/data-analytics-course-training-in-delhi',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/business-analytics-course-in-delhi',
        destination: '/business-analytics-course-training-in-delhi',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-in-delhi',
        destination: '/artificial-intelligence-ai-course-training-delhi',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-in-chennai',
        destination: '/artificial-intelligence-ai-course-training-chennai',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-certification-in-mumbai',
        destination: '/data-science-course-training-in-mumbai',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-in-mumbai',
        destination: '/artificial-intelligence-ai-course-training-mumbai',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-mumbai',
        destination: '/data-analytics-course-training-in-mumbai',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-courses-in-hyderabad',
        destination: '/data-science-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-training-in-hyderabad',
        destination: '/data-science-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/machine-learning-course-in-hyderabad',
        destination: '/machine-learning-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-hyderabad',
        destination: '/data-analytics-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-hyderabad-2',
        destination: '/data-analytics-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/business-analytics-online-course-in-hyderabad',
        destination: '/business-analytics-course-training-in-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/artificial-intelligence-course-in-hyderabad',
        destination: '/artificial-intelligence-ai-course-training-hyderabad',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-science-course-in-canada',
        destination: '/data-science-course-training-in-canada',
        permanent: true,
      },
      {
        // this will match `/english(default)/something` being requested
        source: '/data-science-course/data-analytics-course-in-canada',
        destination: '/data-analytics-course-training-in-canada',
        permanent: true,
      },
      {
        source: '/data-science-course',
        destination: '/data-science-course-training-in-bangalore',
        permanent: true,
      },
      {
        source: '/data-science-course/machine-learning-course-in-dubai',
        destination: '/machine-learning-course-training-in-dubai',
        permanent: true,
      }, 
      {
        source: '/data-science-course/data-analytics-course-in-dubai-uae',
        destination: '/data-analytics-course-training-in-dubai',
        permanent: true,
      }, 
      
      {
        source: '/data-science-course/business-analytics-course-in-dubai',
        destination: '/business-analytics-course-training-in-dubai',
        permanent: true,
      },    
      {
        source: '/data-science-course/artificial-intelligence-course-in-dubai',
        destination: '/artificial-intelligence-ai-course-training-dubai',
        permanent: true,
      }, 
      {
        source: '/data-science-course/data-science-courses-in-chennai',
        destination: '/data-science-course-training-in-chennai',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-certification-courses',
        destination: '/data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/data-science-course/advance-data-science-certification-courses',
        destination: '/advance-data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/data-science-course/artificial-intelligence-certification-course',
        destination: '/artificial-intelligence-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-ai-for-managers',
        destination: '/data-science-ai-for-managers',
        permanent: true,
      },
      {
        source: '/data-science-course/job-guarantee-or-money-back-data-science-ai-certification-course',
        destination: '/job-guarantee-or-money-back-data-science-ai-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-certification-courses',
        destination: '/data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/data-science-course/data-analytics-business-analytics-programs-for-professionals',
        destination: '/data-analytics-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-course/top-data-science-certifications-in-2022-exclusive-to-banking-professionals',
        destination: 'https://blog.learnbay.co/top-data-science-certifications-in-2022-exclusive-to-banking-professionals',
        permanent: true,
      },
      {
        source: '/data-science-course/how-does-data-science-promote-project-Managers-to-a-new-perspective-of-success',
        destination: 'https://blog.learnbay.co/how-does-data-science-promote-project-managers-to-a-new-perspective-of-success',
        permanent: true,
      },
      {
        source: '/data-science-course/know-the-top-10-data-science-trends-2022',
        destination: 'https://blog.learnbay.co/know-the-top-10-data-science-trends-2022',
        permanent: true,
      },
      {
        source: '/data-science-course/how-to-build-a-rewarding-career-as-a-healthcare-data-scientist',
        destination: 'https://blog.learnbay.co/how-to-build-a-rewarding-career-as-a-healthcare-data-scientist',
        permanent: true,
      },
      {
        source: '/data-science-course/how-data-analytics-can-fast-track-your-e-commerce-retail-and-supply-chain-career',
        destination: 'https://blog.learnbay.co/how-data-analytics-can-fast-track-your-e-commerce-retail-and-supply-chain-career',
        permanent: true,
      },
      {
        source: '/data-science-course/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package',
        destination: 'https://blog.learnbay.co/banking-finance-services-insurance-sector-know-how-to-achieve-the-most-lucrative-salary-package',
        permanent: true,
      },
      {
        source: '/data-science-course/marketing-sales-and-hr-is-being-a-data-scientist-the-only-hope',
        destination: 'https://blog.learnbay.co/marketing-sales-and-hr-is-being-a-data-scientist-the-only-hope',
        permanent: true,
      },
      {
        source: '/data-science-course/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive',
        destination: 'https://blog.learnbay.co/media-hospitality-and-transportation-know-how-data-science-will-help-you-to-survive',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-jobs-the-busting-ways-to-secure-attractive-packages-in-health-care',
        destination: 'https://blog.learnbay.co/data-science-jobs-the-busting-ways-to-secure-attractive-packages-in-health-care',
        permanent: true,
      },
      {
        source: '/data-science-course/how-to-make-a-rewarding-career-in-the-energy-oil-and-gas-domain-as-a-data-scientist',
        destination: 'https://blog.learnbay.co/how-to-make-a-rewarding-career-in-the-energy-oil-and-gas-domain-as-a-data-scientist',
        permanent: true,
      },
      {
        source: '/data-science-course/nlp-and-deep-learning-for-data-scientists',
        destination: 'https://blog.learnbay.co/nlp-and-deep-learning-for-data-scientists',
        permanent: true,
      },
      {
        source: '/data-science-course/method-overriding-in-python-of-data-science-everything-you-need-to-know',
        destination: 'https://blog.learnbay.co/method-overriding-in-python-of-data-science-everything-you-need-to-know',
        permanent: true,
      },
      {
        source: '/data-science-course/different-job-roles-after-a-data-science-course',
        destination: 'https://blog.learnbay.co/different-job-roles-after-a-data-science-course',
        permanent: true,
      },
      {
        source: '/data-science-course/clustering-data-science-unsupervised-learning',
        destination: 'https://blog.learnbay.co/clustering-data-science-unsupervised-learning',
        permanent: true,
      },
      {
        source: '/data-science-course/Introduction to Simple Linear Regression in Machine Learning',
        destination: 'https://blog.learnbay.co/Introduction to Simple Linear Regression in Machine Learning',
        permanent: true,
      },
      {
        source: '/data-science-course/know-the-best-strategy-to-find-the-right-data-science-job-in-delhi',
        destination: 'https://blog.learnbay.co/know-the-best-strategy-to-find-the-right-data-science-job-in-delhi',
        permanent: true,
      },
      {
        source: '/data-science-course/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth',
        destination: 'https://blog.learnbay.co/investing-3-lakhs-on-data-science-certification-course-does-it-really-worth',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-for-working-professionals',
        destination: 'https://blog.learnbay.co/data-science-for-working-professionals',
        permanent: true,
      },      
      {
        source: '/data-science-course/regression-techniques-in-machine-learning',
        destination: 'https://blog.learnbay.co/regression-techniques-in-machine-learning',
        permanent: true,
      },      
      {
        source: '/data-science-course/top-50-interview-questions-of-machine-learning',
        destination: 'https://blog.learnbay.co/top-50-interview-questions-of-machine-learning',
        permanent: true,
      },      
      {
        source: '/data-science-course/top-50-interview-question-on-statistics',
        destination: 'https://blog.learnbay.co/top-50-interview-question-on-statistics',
        permanent: true,
      },      
      {
        source: '/data-science-course/Model vs Algorithm in ML',
        destination: 'https://blog.learnbay.co/Model vs Algorithm in ML',
        permanent: true,
      },      
      {
        source: '/data-science-course/introduction-to-python-programming',
        destination: 'https://blog.learnbay.co/introduction-to-python-programming',
        permanent: true,
      },
      {
        source: '/data-science-course/win-this-covid-19-with-data-science-course',
        destination: 'https://blog.learnbay.co/win-this-covid-19-with-data-science-course',
        permanent: true,
      },
      {
        source: '/data-science-course/text-stemming-in-nlp',
        destination: 'https://blog.learnbay.co/text-stemming-in-nlp',
        permanent: true,
      },
      {
        source: '/data-science-course/gaussian-and-normal-distribution',
        destination: 'https://blog.learnbay.co/gaussian-and-normal-distribution',
        permanent: true,
      },
      {
        source: '/data-science-course/what-is-supervised-and-unsupervised-learning-in-machine-learning',
        destination: 'https://blog.learnbay.co/what-is-supervised-and-unsupervised-learning-in-machine-learning',
        permanent: true,
      },
      {
        source: '/data-science-course/gradient-descent-for-machine-learning',
        destination: 'https://blog.learnbay.co/gradient-descent-for-machine-learning',
        permanent: true,
      },
      {
        source: '/data-science-course/xgboost-classifier',
        destination: 'https://blog.learnbay.co/xgboost-classifier',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-at-intern-level',
        destination: 'https://blog.learnbay.co/data-science-at-intern-level',
        permanent: true,
      },
      {
        source: '/data-science-course/exploratory-data-analysis-on-iris-dataset',
        destination: 'https://blog.learnbay.co/exploratory-data-analysis-on-iris-dataset',
        permanent: true,
      },
      {
        source: '/data-science-course/linear-regression-in-machine-learning',
        destination: 'https://blog.learnbay.co/linear-regression-in-machine-learning',
        permanent: true,
      },
      {
        source: '/data-science-course/random-forest-model-rfm',
        destination: 'https://blog.learnbay.co/random-forest-model-rfm',
        permanent: true,
      },
      {
        source: '/data-science-course/why-you-need-data-science',
        destination: 'https://blog.learnbay.co/why-you-need-data-science',
        permanent: true,
      },
      {
        source: '/data-science-course/human-activity-recognition-with-smart-phone',
        destination: 'https://blog.learnbay.co/human-activity-recognition-with-smart-phone',
        permanent: true,
      },
      {
        source: '/data-science-course/young-data-scientists',
        destination: 'https://blog.learnbay.co/young-data-scientists',
        permanent: true,
      },
      {
        source: '/data-science-course/decision-tree',
        destination: 'https://blog.learnbay.co/decision-tree',
        permanent: true,
      },
      {
        source: '/data-science-course/support-vector-machines',
        destination: 'https://blog.learnbay.co/support-vector-machines',
        permanent: true,
      },
      {
        source: '/data-science-course/data-preprocessing',
        destination: 'https://blog.learnbay.co/data-preprocessing',
        permanent: true,
      },
      {
        source: '/data-science-course/different-jobs-opportunities-of-data-science',
        destination: 'https://blog.learnbay.co/different-jobs-opportunities-of-data-science',
        permanent: true,
      },
      {
        source: '/data-science-course/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist',
        destination: 'https://blog.learnbay.co/you-could-be-a-pro-in-data-science-by-self-assisting-data-scientist',
        permanent: true,
      },
      {
        source: '/data-science-course/differentiating-data-scientist-and-data-analyst',
        destination: 'https://blog.learnbay.co/differentiating-data-scientist-and-data-analyst',
        permanent: true,
      },
      {
        source: '/data-science-course/customer-experience-enhancement-in-banks',
        destination: 'https://blog.learnbay.co/customer-experience-enhancement-in-banks',
        permanent: true,
      },
      {
        source: '/data-science-course/future-of-education-in-hands-of-machine-learning',
        destination: 'https://blog.learnbay.co/future-of-education-in-hands-of-machine-learning',
        permanent: true,
      },
      {
        source: '/data-science-course/practice-of-intelligence-with-help-of-artificial-intelligence-in-academics',
        destination: 'https://blog.learnbay.co/practice-of-intelligence-with-help-of-artificial-intelligence-in-academics',
        permanent: true,
      },
      {
        source: '/data-science-course/necessity-of-machine-learning-in-retail',
        destination: 'https://blog.learnbay.co/necessity-of-machine-learning-in-retail',
        permanent: true,
      },
      {
        source: '/data-science-course/artificial-intelligence-in-e-commerce',
        destination: 'https://blog.learnbay.co/artificial-intelligence-in-e-commerce',
        permanent: true,
      },
      {
        source: '/data-science-course/reliable-sources-to-understand-about-data-science',
        destination: 'https://blog.learnbay.co/reliable-sources-to-understand-about-data-science',
        permanent: true,
      },
      {
        source: '/data-science-course/evolution-of-data-science-in-india',
        destination: 'https://blog.learnbay.co/evolution-of-data-science-in-india',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-certification-courses',
        destination: '/data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/data-science-course/business-analytics-course-in-bangalore',
        destination: '/business-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        source: '/data-science-course/data-analytics-online-training-in-bangalore',
        destination: '/data-analytics-course-training-in-bangalore',
        permanent: true,
      },
      {
        source: '/data-science-course/webinar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/data-science-course/shop',
        destination: '/',
        permanent: true,
      },
      {
        source: '/data-science-course/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/data-science-course/reviews',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/data-science-course/team',
        destination: '/',
        permanent: true,
      },
      {
        source: '/data-science-course/thank-you',
        destination: '/Thank-you',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-course-in-dubai-uae',
        destination: '/data-science-course-training-in-dubai',
        permanent: true,
      },
      {
        source: '/data-science-course/product/data-science-and-ai-certification-freshers',
        destination: '/advance-data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-and-ai-for-fresh-graduates-learnbay',
        destination: '/full-stack-software-development-program',
        permanent: true,
      },      {
        source: '/data-science-course/data-science-course-online',
        destination: '/data-science-ai-for-managers',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/learnbay',
        destination: '/artificial-intelligence-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-course/data-science-and-ai-for-fresh-graduates-learnbay',
        destination: '/job-guarantee-or-money-back-data-science-ai-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/leanbaybangaluru',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/statistics',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/nlp',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/ai',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/lemmatization',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/css',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/ibm',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/category/technology',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/learbay',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/tag/bangalore',
        destination: 'https://www.learnbay.co/',
        permanent: true,
      },
      {
        source: '/data-science-course/model-vs-algorithm-in-ml',
        destination: 'https://blog.learnbay.co/model-vs-algorithm-in-ml',
        permanent: true,
      },
    ]
  },
}

// module.exports = {
//   images: {
//     domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
//   },
// };

// module.exports = nextConfig;

