import React from "react";
import { coin5 } from "../Data";

const PersonalLoan=()=> {
  const loanTypes = [
    {
      title: "Unsecured Personal Loan",
      subtitle: "No collateral required",
      description:
        "Based on credit score, income, and repayment capacity. Most common type used for general needs.",
    },
    {
      title: "Unsecured Personal Loan",
      subtitle: "No collateral required",
      description:
        "Based on credit score, income, and repayment capacity. Most common type used for general needs.",
    },
    {
      title: "Unsecured Personal Loan",
      subtitle: "No collateral required",
      description:
        "Based on credit score, income, and repayment capacity. Most common type used for general needs.",
    },
    {
      title: "Unsecured Personal Loan",
      subtitle: "No collateral required",
      description:
        "Based on credit score, income, and repayment capacity. Most common type used for general needs.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Personal Loan</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Apply online and get quick approval with minimal documentation.
          Flexible EMIs, competitive interest rates, and 100% transparency—
          tailored to meet your personal needs.
        </p>
      </div>

      {/* Loan Image */}
      <div className=" mb-10">
        <img
          src={coin5}
          alt="loan"
          className="rounded-lg shadow-md w-full "
        />
      </div>

      {/* Loan Types */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Types of loan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loanTypes.map((loan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-gray-800">{loan.title}</h3>
                <p className="text-sm text-green-600">{loan.subtitle}</p>
                <p className="text-gray-600 text-sm mt-2">{loan.description}</p>
              </div>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalLoan;