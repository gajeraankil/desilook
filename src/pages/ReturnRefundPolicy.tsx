import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ReturnRefundPolicy = () => {
  return (
    <Box component="section" className="py-10">
      <Container className="text-justify">
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          Quality products that are priced at an honest value and backed by the
          best customer service possible. Our customers will remain our focus in
          the future. We will take care of each customer, one at a time, each
          time we hear from him or her. After all, everything is about emotions
          and expressions.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          We are always looking forward to giving you the best products at the
          best prices, and we have the best of hopes that we will continue our
          relations till time abides by your love for things Indian! However,
          if, due to some unforeseen situation, you require the return of the
          product, then the following terms apply for a mutually consented
          return:
        </Typography>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Return & Refund Terms and Conditions:
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify font-bold">
              Please note that we are not accepting any returns for stitched
              clothing, including stitched salwar suits, stitched Stitched and
              stitched sarees with custom blouses. We only accept returns for
              unstitched products.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify font-bold">
              If we receive the payment from PayPal and if you want to cancel
              the order before 24 hours of placement, then you have to bear the
              PayPal fees and processing charges. The charges exceed up to 20%
              of the order amount.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              At any point in time, the refunds will not exceed the actual value
              of the goods.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              We will issue a 70% refund of the unstitched product price. 30%
              will be order processing, payment gateway, and other recurring
              charges.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              We will not refund the customs duties, shipping costs, or taxes,
              if applicable.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              In the case of orders with free shipping, shipping costs would be
              deducted from the refund. Desilook Lifestyle will not be
              responsible for returning the money you paid for shipping to send
              the parcel back.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify font-bold">
              The customer has to bear the shipping cost while returning the
              unstitched or stitched products in any case. Desilook Lifestyle
              will not bear any kind of return shipping cost.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              Refunds would not be accepted for custom-made or stitched
              clothing, including ready-made stitched sarees or sarees stitched
              with a custom blouse.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              Any complaint with regards to the damage or stains should be
              reported to us within 24 to 48 hours of the receipt of the
              products. We may ask for a digital picture of the same in order to
              review the same. In the event of a product return, we will issue a
              refund once we receive the product back at our office. The refund
              will take time to reflect in the customer's account, about 4 to 5
              working days. We do not accept any returns after 3 days of
              receiving the shipment.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              While we are committed to maintaining a long-lasting relationship
              with our customers by providing them with 100% satisfaction, we
              are unable to accept returns or exchanges of customized products.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              Return requests regarding strains or damage faults need to be
              filed within 24 to 48 hours of product delivery. In these cases,
              you will also need to send an image of the product and a digital
              copy of the product invoice.
            </ListItem>
            <ListItem className="p-0 text-justify font-bold">
              We do not cancel the placed order after 24 hours. If you want to
              cancel the order after 24 hours, you will have to pay 30% bank
              payment processing charges from your total order amount. We do not
              provide any cancellation if the order is in processing and
              products are received. We don't provide any refunds for the same.
              The cancellation amount will be credited as a Desilook Lifestyle
              Store credit or coupon.
            </ListItem>
          </List>
        </Box>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          If you have any questions about our return policies, we'll do our best
          to answer them. Please contact us at
          <NavLink
            className="mx-1 text-primary no-underline"
            to="mailto:desilooklifestyle.com@gmail.com"
          >
            support@desilooklifestyle.com
          </NavLink>
          for more information about returns and cancellations.
        </Typography>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Color and Description Discrepancy
          </Typography>
          The apparel description on the website contains details and product
          specifications, which are approximate values closest to reality. While
          we strive to be accurate in showcasing colors, there may still be
          minor variations because of the light and settings during photography,
          as well as the color settings and properties of various monitors.
          Other details, like weight, work details, and size, may vary slightly
          as well. Hence, the customer should keep in mind the slight variation
          when placing the order online. Desilook Lifestyle believes that every
          customer placing an order is absolutely aware of these minor
          variations that may occur with respect to the actual color of the
          outfit received.
        </Box>
        <Box className="text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Embellishment-related issues
          </Typography>
          Apparel consisting of embellishments like beads and sequences usually
          has the tendency to come off. Even with perfect handling, care, and
          packaging, this cannot be completely avoided. During physical transit,
          some of them may come loose; hence, if you see such situations arise
          when you unpack or wear your attire, do not worry, as it is a common
          issue.
        </Box>
      </Container>
    </Box>
  );
};

export default ReturnRefundPolicy;
