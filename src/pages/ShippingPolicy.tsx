import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <Box component="section" className="py-10">
      <Container className="text-justify">
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          We deliver to all and any postal address around the world. Courier
          companies do not deliver to P.O. Box addresses, so we request that you
          provide a full street address with a pin code or zip code.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          Please note that residential shipments to the USA and some other
          countries will be left at the door if someone is not there to receive
          the package or no one answers the doorbell. Our courier agents, such
          as USPS, DHL, FEDEX, TNT, UPS, DTDC, SpeedPost, etc., will not be able
          to provide sign-confirmation of delivery in such cases.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          To ensure that no disputes arise due to this, kindly make sure that
          someone is there to receive the package when courier delivery is
          attempted.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          No deliveries are made on Saturdays and Sundays in most countries with
          a 5-day work culture. In many Islamic countries, Fridays are normal
          off-days. Sometimes we can try to organize deliveries on Saturdays at
          some extra cost on a case-by-case basis, if possible.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          Further deliveries are generally made during the normal working hours
          of courier companies, and these vary from country to country.
        </Typography>
        <Typography className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          Please note that there are no shipments made from the store on Sundays
          and public holidays, as our logistics partner does not make any
          pick-ups on those days.
        </Typography>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Calculating shipping costs
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              Shipping costs are not built into each item's price. You get the
              benefit of reduced shipping costs on each additional item. Fair
              and transparent shipping rates.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              Please also note that the shipping rates are weight-based. The
              weight of any product can be found on its detail page. To match
              the policies of the shipping companies we use, all weights will be
              rounded up to the next 500 grams.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              International shipping and handling rates are based on the size of
              your order; the larger your order, the lower the rate.
            </ListItem>
            <ListItem className="p-0 text-justify">
              Free shipping to any address in India.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Shipping gifts to India
          </Typography>
          We take great pride in being able to offer free shipping to any
          address in India to our customers with family and friends back home.
          To ensure the quickest confirmed delivery on all orders to India,
          please be sure to include the complete postal address with the correct
          PIN code. We cannot be responsible for postal delays resulting from
          incomplete address listings.
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Transit times
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              We ship all orders using the fastest possible air courier
              services, like USPS, DHL, TNT, DTDC, SpeedPost, etc., and they
              deliver within 48-72 hours across the USA, Europe, and all major
              cities in the Middle East and Far East.
            </ListItem>
            <ListItem className="px-0 pt-0">
              <Box className="text-justify">
                If you are looking for alternate shipping options, then cheaper
                and slower shipping options can be suggested. On request, we can
                also make special quotes for shipping if the merchandise order
                amount is large. Please write to
                <NavLink
                  className="mx-1 text-primary no-underline"
                  to="mailto:desilooklifestyle.com@gmail.com"
                >
                  support@desilooklifestyle.com
                </NavLink>
                for more details.
              </Box>
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              If you ordered two or more items, you may receive them in multiple
              boxes on different days because of varying item availability and
              shipping locations. Often, products will be shipped separately
              from one another for added safety in transit, so you may receive
              more than one delivery to your address.
            </ListItem>
            <ListItem className="p-0 text-justify">
              Please note that all the products will be shipped from India.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Transit Risk
          </Typography>
          Desilook Lifestyle is not responsible for lost and stolen packages or
          any full or partial damages to the package after it is left at the
          customer's address by a postal or courier agency.
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Shipment and tracking details:
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              We will send you an email regarding the shipment of your order as
              soon as the items are handed over to the courier. These alert
              emails will contain the tracking number and courier company
              website details, along with the expected date of delivery. You may
              also check the same on our order status page.
            </ListItem>
            <ListItem className="p-0 text-justify">
              Tracking numbers for orders shipped might take 24 business hours
              to become active on the courier websites.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Address change requests:
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0">
              <Box className="text-justify">
                Once an order is registered, you cannot make any alterations.
                However, address alteration requests may be accommodated within
                24 hours of placing the order. You may send your alteration
                request to
                <NavLink
                  className="ms-1 text-primary no-underline"
                  to="mailto:desilooklifestyle.com@gmail.com"
                >
                  support@desilooklifestyle.com
                </NavLink>
                , and the needful will be done.
              </Box>
            </ListItem>
            <ListItem className="p-0 text-justify">
              Multiple address orders: Currently, this option is not available.
              However, if you want to send the product to different addresses,
              you can place multiple orders.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Incorrect or incomplete address
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0">
              <Box className="text-justify">
                Please note: some courier companies charge a penalty for
                incorrect shipping addresses, wherein the address and zip code
                do not match. The customer will, without exception, bear the
                cost of any such penalties and/or fees, not
                <NavLink
                  className="ms-1 text-primary no-underline"
                  to="mailto:desilooklifestyle.com@gmail.com"
                >
                  desilooklifestyle.com
                </NavLink>
                . Please make sure your shipping address is correct.
              </Box>
            </ListItem>
            <ListItem className="p-0 text-justify">
              In the event of a reshipment of the same order, customers will be
              responsible for paying re-shipping charges for the reshipment.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Packing method:
          </Typography>
          All products are first polythene-packed, then put in a corrugated box.
          All orders are shipped by first-class air courier services and home
          delivered within approximately 3-7 working days after dispatch of the
          shipment.
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Time to ship
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              For each item, we have mentioned the time to ship along with the
              item image. These are indicative and approximate values only, and
              items can be shipped earlier or later, depending on the
              availability of the item and other factors.
            </ListItem>
            <ListItem className="p-0 text-justify">
              We are proud to offer such shipping values to our customers,
              especially when paired with our fast delivery times. In most
              cases, your order will be processed within 48-72 hours of your
              placing it. You can expect to receive your order, on average,
              within 7-15 business days of placing it.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            What if there are any delays?
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              The times to ship mentioned on our website for each item are
              indicative and approximate values only, and some times, due to
              situations beyond our control, delays may occur. No refund,
              return, replacement, or exchange will be entertained for this
              reason.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              If, for any reason, there is going to be a delay in shipping
              because an item is out of stock or if there is an unusual delay in
              filling an order, we will notify you by e-mail.
            </ListItem>
            <ListItem className="p-0 text-justify">
              However, any dates for delivery are approximate only, and we are
              not liable for any delay in delivering your order or any part of
              it. We may choose to deliver your order in separate parts. In some
              cases, we may offer to refund you for an unfulfilled part of the
              order.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            VAT and customs duties
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              VAT, customs taxes, and import duties are not under our control.
              They vary according to the rules of different countries and must
              be paid directly by the buyer. VAT, customs taxes, and import
              duties are not included in our ordering process but may be charged
              to you by your government.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              International customers are responsible for any customs or duty
              fees levied by their country. We have no control over these
              charges and cannot predict where they will occur, as policies vary
              greatly from nation to nation.
            </ListItem>
            <ListItem className="px-0 pt-0 text-justify">
              They are entirely your responsibility. The courier company may
              also charge some additional service charges over and above customs
              duty on a case-by-case basis.
            </ListItem>
            <ListItem className="p-0 text-justify font-bold">
              From July 1, 2021, VAT will be applicable to all shipments
              delivered in the EU. The duty and VAT have to be borne by the
              customers. The prices you show for the products do not include
              taxes and VAT.
            </ListItem>
          </List>
        </Box>
        <Box className="mb-5 text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            Billing Address and Shipping Address
          </Typography>
          The billing address is the address where a customer gets his bills
          from the credit card company. The shipping address is the address
          where the customer wants to receive their shipment.
        </Box>
        <Box className="text-sm font-medium leading-[1.7] text-[#60697B]">
          <Typography className="font-bold leading-[1.45] tracking-[-0.01rem] text-[#1B1E23]">
            What happens if my order is lost in transit?
          </Typography>
          <List className="p-0">
            <ListItem className="px-0 pt-0 text-justify">
              If a shipment is lost in transit, we wait for 15 days and then
              reprocess or reship the order.
            </ListItem>
            <ListItem className="p-0">
              <Box className="text-justify">
                If you have any questions about our shipping policies, we'll do
                our best to answer them. Please contact us at
                <NavLink
                  className="ms-1 text-primary no-underline"
                  to="mailto:desilooklifestyle.com@gmail.com"
                >
                  care@desilooklifestyle.com
                </NavLink>
                .
              </Box>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default ShippingPolicy;
