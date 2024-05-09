import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Box component="section" className="py-[40px]">
      <Container>
        <Typography
          variant="h2"
          className="mb-[15px] text-center text-[26px] font-bold leading-9 -tracking-wide text-[#343F52]"
        >
          Who We Are
        </Typography>
        <Typography className="mb-[20px] text-justify text-[14px] font-medium leading-[1.7] text-[#60697B]">
          Desilook Lifestyle is the new generation of online Indian ethnic wear
          stores. Desilook Lifestyle brings you the world's finest collection
          and wide range of Indian
          <Box component="span" className="mx-1 text-primary">
            SAREES, SALWAAR KAMEEZ,
          </Box>
          and
          <Box component="span" className="ms-1 text-primary">
            LEHENGA CHOLI
          </Box>
          .
        </Typography>
        <Typography className="mb-[20px] text-justify text-[14px] font-medium leading-[1.7] text-[#60697B]">
          We are one of the leading providers of online Indian traditional
          attire. Our key focus is on good-quality products, on-time delivery,
          and customer satisfaction. Our apparel is exclusively designed to
          bestow upon you the real feel of Indian heritage. Our collections are
          not only an ideal mix of form, function, and festivals, but they also
          reflect the richness of Indian wardrobes and traditions.
        </Typography>
        <Typography className="mb-[20px] text-justify text-[14px] font-medium leading-[1.7] text-[#60697B]">
          Desilook Lifestyle endeavors to replicate the richness of the in-store
          shopping experience through an easy-to-use website that offers an
          unmatched collection of Indian fashion. Through customer-friendly
          features like customization and style selection, we offer an
          experience that is far better than many in an offline store. We are
          proud to be trend-setters in the fashion world and ethnic Indian wear.
          We are offering a high level of customization in a vast variety of
          sizes and styles, with which customers can enjoy the best tailor-made
          apparel.
        </Typography>
        <Typography className="text-justify text-[14px] font-medium leading-[1.7] text-[#60697B]">
          Desilook Lifestyle has a large number of domestic and international
          customers. Desilook Lifestyle is proud to cater to customers from
          different countries, such as the USA, UK, Canada, Australia, South
          Africa, New Zealand, Singapore, and many other countries.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
