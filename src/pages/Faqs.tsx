import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";

const Faqs = () => {
  const data = [
    {
      question: "Can I buy a saree with an unstitched blouse?",
      answer:
        "Yes, you can buy a saree with an unstitched blouse by not selecting Stitched Blouse options under Customization. However, you can select other tailoring options if you wish.",
    },
    {
      question: "Do the shipping charges vary from country to country?",
      answer:
        "Yes, for some products, they vary from country to country. You will get the exact shipping price when you checkout from your shopping cart.",
    },
    {
      question:
        "Is the shipping charge calculated based on the weight of the package?",
      answer:
        "The shipping charges are calculated based on the number of products in your order. You can view the shipping cost in your cart when you purchase the products.",
    },
    {
      question: "Can I track the package once you ship it from India?",
      answer:
        "Yes, you would receive an email with the airway bill number of the courier once it is shipped. You can also check the status of your product by logging in to your account. You would be able to track it with the respective courier.",
    },
    {
      question: "What are your shipping charges for deliveries inside India?",
      answer:
        "Delivery within India is free of charge in most cases; however, if there is a change, it can be verified at the shipping policy.",
    },
    {
      question: "Can you deliver to any country in the world?",
      answer:
        "Yes, we deliver to almost all countries in the world like Australia, Austria, Bahrain, Belgium, Bhutan, Brazil, Canada, Chile, Denmark, Egypt, Finland, Fiji, France, Germany, Great Britain, Greece, Guatemala, Hong Kong, India, Indonesia, Israel, Ireland, Italy, Japan, Jordan, Kuwait, Lithuania, Luxembourg, Mali, Malaysia, Madagascar, Maldives, Mauritius, Mexico, Morocco, Myanmar, Nepal, New Zealand, Netherlands, Norway, Oman, Panama, Peru, Philippines, Poland, Portugal, Qatar, Republic of Ireland, Romania, Russia, Saudi Arabia, Singapore, South Africa, Spain, Sri Lanka, Switzerland, Sweden, Thailand, United Arab Emirates, United Kingdom, United States of America, Ukraine, Uruguay, Venezuela, Vietnam & many other countries",
    },
    {
      question:
        "What is the procedure to return a product, if I don't like it?",
      answer:
        "Please report the return to us within 24 hours of receiving the product. You may email us, call us, or WhatsApp us and inform us of the same.",
    },
    {
      question:
        "Can I return a salwar kameez or a lehenga that is stitched to my measurements?",
      answer:
        "Sorry, custom-stitched products cannot be returned or exchanged.",
    },
    {
      question:
        "I bought a saree with the blouse stitched. Can I return or exchange it?",
      answer:
        "Returns would not be accepted for custom-made or stitched clothing, including sarees where the blouse is stitched, ready-made stitched sarees, or sarees stitched with a custom blouse. However, we would accept returns if there were any faults on our end.",
    },
    {
      question: "Will I get a full refund if I return the product?",
      answer:
        "The value of the refund varies from one case to another. It would be under the sole discretion of the operations.",
    },
    {
      question: "Are there any charges for refunds if I return an item?",
      answer:
        "There is an admin credit card commission cost of 10 percent of the final order value, 5 percent while accepting, 5 percent while refunding, or 10 USD depending on the order size. We will not refund the shipping charges you paid while purchasing the item. We will not refund the customs duties or taxes, if applicable, or those paid by you at the time of receiving the goods.",
    },
    {
      question: "Can I pay using my debit card?",
      answer: "Yes, we do accept all major debit cards.",
    },
    {
      question: "How do I know that you have received my payments?",
      answer:
        "You will receive an email confirmation that we have received your payments along with your order number.",
    },
    {
      question:
        "I have transferred money through Western Union; what do I do next?",
      answer:
        "Please email us the 10-digit MTCN number along with your temporary reference number. We will generate your order once we receive the payments from Western Union.",
    },
    {
      question: "My card has been declined. What should I do?",
      answer:
        "Please recheck if you have given your card details correctly. If so, please contact your banks and explain to them that you are trying to purchase from an online store. Your banks might block your cards for security issues.",
    },
    {
      question: "Can I pay using two different cards for one order?",
      answer: "It's not possible to pay using two cards for one order.",
    },
    {
      question:
        "Can I pay using a bank transfer? Where do I get details about your bank account?",
      answer:
        "Yes, you can pay through a bank transfer. You would send us an email at support@DesilookLifestyle.com with the product code for a bank transfer. Once we receive your email, we will send you our bank account details.",
    },
    {
      question:
        "I do not have a PayPal account. Can I still transfer money to your account?",
      answer:
        "Yes, you can choose our other payment options other than PayPal.",
    },
    {
      question: "What is the billing address?",
      answer:
        "The address where you receive your card statements is called the billing address.",
    },
    {
      question: "What is the shipping address?",
      answer:
        "The address where you would like to deliver the goods is called the shipping address.",
    },
    {
      question: "Can the billing address and shipping address be different?",
      answer: "Yes, you can give a different shipping address.",
    },
  ];

  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box component="section" className="py-10">
      <Container>
        {data?.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            className="text-sm font-bold"
          >
            <AccordionSummary
              className={`leading-[1.45] tracking-[-0.01rem] text-[#1B1E23] hover:bg-[#E9EAEB] ${
                expanded === index ? "bg-[#e9eaeb]" : ""
              }`}
              expandIcon={<ExpandMore />}
              aria-controls={`${index}-content`}
              id={`${index}-header`}
            >
              {faq?.question}
            </AccordionSummary>
            <AccordionDetails className="leading-[1.7] text-[#60697B]">
              {faq?.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faqs;
