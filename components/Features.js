import { title } from "process";

const featuresData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    title: "Accounting, Book-keeping and Audit",
    content: [
      "Ensure precise financial reporting with thorough analysis, offering clarity and insights for informed decision-making.",
      "Regulatory Compliance Audits: Guarantee business adherence to all regulatory standards, minimizing risks and enhancing credibility.",
      "Internal Controls and Risk Management: Evaluate and strengthen internal controls to reduce risks and safeguard your organization’s financial integrity.",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    title: "Advisory Solutions",
    content: [
      "Design tailored strategies to drive sustainable growth.",
      "Helping your business excel in competitive markets.",
      "Streamline processes, improve productivity, and reduce costs to enhance overall efficiency.",
      "Identify opportunities and develop strategies to strengthen market presence and gain a competitive edge.",
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: "CFO Services",
    content: [
      "Drive financial planning by analyzing performance and risks.",
      "Maintain awareness of the company's financial position and mitigate issues.",
      "Oversee finance IT systems, audits, and internal controls.",
      "Supervise accounting and finance teams and set targets.",
      "Ensure compliance with financial laws and regulations.",
    ],
  },
  {
    icon: (
<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: "Income and Sales Tax",
    content: [
      "Register companies, partnerships, sole proprietors, or individuals for NTN with FBR",
      "Understand client finances and tax liabilities through consultations",
      "Prepare tax calculations aligned with regulatory requirements",
      "Submit annual income tax returns for clients",
      "Advising clients on various tax-efficient legal organizational structures",
      "Obtaining various income tax exemption certificates from FBR"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: "Copyright",
    content: [
      "Assistance in securing copyrights for intellectual property",
      "Filing of application",
      "Examination",
      "Publication in newspaper (Artistic Work only)",
      "Issuance of Certificate by Registrar (Registration) Filing of registration"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: "Trademark",
    content: [
      "Comprehensive support for registering and protecting trademarks",
      "Filing of application",
      "Appointment of Advocate/Agent of TM Tribunal",
      "Reply to show-cause notice if an objection may arise",
      "Issuance of Certificate by Registrar Trademark",
    ]
  },
  {
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
    ),
    title: "Payroll",
    content: [
      "End-to-end payroll management",
      "Preparation of salary slips and employee payment processing",
      "Statutory deductions and compliance (e.g., provident fund, tax, social security)",
      "Maintenance of employee records and benefits administration",
      "Customized payroll reports and analysis"
    ]
  }, 
  {
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
      <line x1="6" y1="1" x2="6" y2="4"></line>
      <line x1="10" y1="1" x2="10" y2="4"></line>
      <line x1="14" y1="1" x2="14" y2="4"></line>
    </svg>
    ),
    title: "Secraterial Compliances",
    content: [
      "Draft Memorandum and Articles of Association, partnership deeds, etc",
      "Advise on appropriate legal structures: Sole Proprietorship, Partnership (Association of Persons), SMC, Private, or Public Limited Companies",
      "Handle company registration and SECP filings",
      "File secretarial documents, forms, and returns with SECP",
      "Manage changes in management, shareholders, or business windup"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 rounded-full border border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] p-2 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    title: "Taxation and Compliance",
    content: [
      "We provide expert tax planning strategies to minimize liabilities and ensure your business remains financially efficient.",
      "Our services help you navigate complex   corporate laws, ensuring full compliance with legal and regulatory requirements.",
      "We ensure timely and accurate filing of tax returns and regulatory reports, safeguarding your business from penalties and legal issues.",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-5 md:text-center">
            <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
              Services
            </div>
            <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
              Decked with many services.
            </h1>
            <p className="text-xl text-gray-200 md:text-2xl">
              Each service is provided to make <span className="font-semibold">your</span> operations easier.
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group min-h-[300px]"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white text-center">{feature.title}</h3>
                </div>
                <div className="text-md text-gray-200 mt-4 flex-grow">
                  <ul className="list-disc pl-5">
                    {feature.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
