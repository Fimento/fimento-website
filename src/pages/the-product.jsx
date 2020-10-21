import React from 'react';

import Section from '../logic/layouts/Section';
import CatchPhrase from '../logic/layouts/CatchPhrase';
import Page from '../layout/Page';

import StyledH2 from '../styled/elements/StyledH2';
import StyledImg from '../styled/elements/StyledImg';
import StyledParagraph from '../styled/elements/StyledParagraph';

import modules from '../assets/modules.png';

import StyledArticle from '../styled/layouts/StyledArticle';
import StyledFlexBox from '../styled/layouts/StyledFlexBox';

const TheProduct = () => (
  <Page>
    <Section fullWidth marginBottom="none">
      <CatchPhrase>The product and modules explained</CatchPhrase>
      <StyledFlexBox alignItems="flex-start" justifyContent="center" maxWidth="40rem" alignSelf="center">
        <StyledImg src={modules} width="100%" />
      </StyledFlexBox>
    </Section>
    <Section medium marginTop="none">
      <StyledH2>The Fimento modules, from Ledger to Onboarding</StyledH2>
      <StyledArticle>
        <StyledParagraph>
          The Fimento ecosystem consists of several modules that can be combined or,
          in some cases, used individually. What you get is a flexible, customizable
          product that is tailored to your needs and that can be adapted as those needs
          might change over time.
        </StyledParagraph>
        <StyledH2>Accounting</StyledH2>
        <StyledParagraph>
          The accounting module enables an easy connection between the ledger and our
          accounting system. It keeps track of your financial assets, revenue, and costs
          linked to your banking services. This very flexible module is built on top of
          the core ledger. Depending on your reporting standards it can be adapted to cater
          to your specific needs.
        </StyledParagraph>
        <StyledH2>Accounts</StyledH2>
        <StyledParagraph>
          The accounts module helps you keep track of your customers’ accounts and
          transactions. It registers all the transactions happening in any of your customers’
          accounts and calculates interest based on their cash flow. This approach has been
          chosen to maximize flexibility while providing a robust base for the ledger system.
        </StyledParagraph>
        <StyledH2>AML/Fraud</StyledH2>
        <StyledParagraph>
          The AML/Fraud module offers a digital KYC, tailored according to predefined risk
          classification levels and a risk detection system. The risk system scans for AML
          risk when onboarding new customers, and every 24h for existing customers.
        </StyledParagraph>
        <StyledParagraph>
          All available customer data is used in the scanning; payment record data, bank
          account data, credit report, SPAR data, and trade- and industry register data.
          Scanning is refined based on historical data and regularly updated with new AML
          patterns based on industry standard and authority reports. The processes in the
          digital KYC and risk detection system also support manual review when needed.
        </StyledParagraph>
        <StyledH2>Backend</StyledH2>
        <StyledParagraph>
          The backend application enables you to visualize and manage all the services you
          have in the MoTech ecosystem. This is where you check your customers&apos;data linked
          to the different services. You can easily create group-based permissions for your
          co-workers, which lets them handle your everyday operations, while you keep
          control of who has access to these sensitive features.
        </StyledParagraph>
        <StyledH2>Data collection</StyledH2>
        <StyledParagraph>
          The data collection module helps you gather relevant information about your customers
          during onboarding, or on an ongoing basis. It supports multiple sources of information
          such as UC (credit report), Trapets (PEP and Sanction list), Spar (individual KYC),
          Näringslivsregistret (Company KYC), Tink (bank-account data) and
          Instantor (bank-account data).
        </StyledParagraph>
        <StyledH2>Data enrichment</StyledH2>
        <StyledParagraph>
          The data enrichment module provides AI-based data enhancement, optimized to facilitate
          credit decision making. Thanks to state-of-the-art analysis tools, you are able to
          make smarter automatic- and manual decisions. The enriched data is connected to the
          underwriting and the follow-up of customers.
        </StyledParagraph>
        <StyledH2>Decision engine</StyledH2>
        <StyledParagraph>
          The decision engine provides automatic credit decision-making based on predefined models.
          It has been built to allow for fully automated decisions for the low-risk cases, as well
          as manual reviews for the more complex ones. The proportion of manual reviews can be
          customized to follow your specific policies and available resources.
        </StyledParagraph>
        <StyledH2>E-signing</StyledH2>
        <StyledParagraph>
          The e-sourcing modules let our customers digitally sign any type of documents. The
          signature mechanism is based on the Swedish BankID for maximum security. A cryptographic,
          digital signature is generated to hold proof of integrity and authenticity and can be
          verified by any party.
        </StyledParagraph>
        <StyledH2>Frontend</StyledH2>
        <StyledParagraph>
          The frontend application provides a customer-facing website for the services you have
          chosen. It is based on the white-label principle which makes it easy to customize in
          order to follow your brand and style. The frontend application can be used both as an
          onboarding platform as well as a logged-in space for your existing customers.
        </StyledParagraph>
        <StyledH2>Invoicing</StyledH2>
        <StyledParagraph>
          The invoicing module generates payment plans based on your custom logic or by using a
          predefined. The logic is completely independent of the debt- and interest calculation
          to enable maximum flexibility when developing new product ideas. Invoices can be sent
          by post or emails depending on the customers&apos;preferences.
        </StyledParagraph>
        <StyledH2>Notification</StyledH2>
        <StyledParagraph>
          This module enables you to receive notifications based on events received from the
          MoTech ecosystem. Your team can be alerted in real-time about interesting events.
          It supports emails, Slack, and custom webhooks so that it can be integrated into your
          favorite tools and stay close to the rest of your business.
        </StyledParagraph>
        <StyledH2>Payments</StyledH2>
        <StyledParagraph>
          The payments module manages the generation and processing of paymentfiles to be able
          to synchronize your ledger with your bank information. The payment files can be
          downloaded manually for a quick import in your internet banking, or they can be sent
          automatically to your bank through a secure server to server connections. The module can
          generate payouts to bank accounts, BankGiro, and Plusgiro numbers. It also supports
          processing BankGiro and Autogiro repayments.
        </StyledParagraph>
        <StyledH2>Reporting</StyledH2>
        <StyledParagraph>
          The reporting module connects all data generated by the banking ecosystem to a data
          lake and makes custom analysis. Reports can be generated using aggregated data from a
          wide range of data sources, including system data as well as more disruptive sources
          such as customer behavior data or communication history. Standard reports can be printed
          from the back-end applications and can also be scheduled.
        </StyledParagraph>
        <StyledH2>Underwriting</StyledH2>
        <StyledParagraph>
          The underwriting module contains all the tools and processes surrounding credit decisions.
          It relies on a “left to live on” (Swedish: Kvar-att-leva-på-kalkyl) calculation tool to
          provide a solid basis for the credit review. The module supports duality, has extensive
          traceability,and logging to simplify the auditing process. It comes with process
          management tools to organize tasks and distribute customers between your underwriters.
        </StyledParagraph>
      </StyledArticle>
    </Section>
  </Page>
);

export default TheProduct;
