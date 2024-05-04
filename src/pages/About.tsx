import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <section className="py-[40px]">
      <Container>
        <Typography
          variant="h2"
          className="text-[26px] text-[#0F172A] text-center font-bold leading-9 -tracking-wide mb-[15px]"
        >
          Who We Are
        </Typography>
        <Typography className="text-[14px] text-[#64748B] leading-[1.7] font-medium mb-[20px]">
          Desilook Lifestyle is the new generation Online Indian Ethnic Wear
          Store. DesilookLifestyle.com brings you the world's finest collection
          and wide range of Indian
          <span className="text-primary"> SAREES, SALWAAR KAMEEZ</span> and
          <span className="text-primary"> LEHENGA CHOLI</span>.
        </Typography>
        <Typography className="text-[14px] text-[#64748B] leading-[1.7] font-medium mb-[20px]">
          We are one of the leading providers of online Indian traditional
          attire. Our key focus is on good quality products, on-time delivery,
          customer's satisfaction. Our apparels are exclusively-designed to
          bestow upon you the real feels of Indian heritage. Our collections are
          not only an ideal mix of form, function and festivals, but they also
          reflect the richness of Indian wardrobe and tradition.
        </Typography>
        <Typography className="text-[14px] text-[#64748B] leading-[1.7] font-medium mb-[20px]">
          DesilookLifestyle.com endeavors to replicate the richness of the
          in-store shopping experience through an easy-to-use website which
          offers an unmatched collection of Indian fashion. Through
          customer-friendly features like customization and style selection, we
          offer an experience that is far better than many an offline store.We
          are proud to be trend-setters in fashion world and ethnic Indian wear.
          We are offering a high level of customization in a vast variety of
          sizes and styles with which customers can enjoy the best tailor-made
          apparel.
        </Typography>
        <Typography className="text-[14px] text-[#64748B] leading-[1.7] font-medium">
          DesilookLifestyle.com has a large number of domestic and international
          customers. DesilookLifestyle.com take a proud to cater customers from
          different countries such as USA, UK, Canada, Australia , South Africa,
          New Zealand, Singapore and many other countries.
        </Typography>
      </Container>
    </section>
  );
};

export default About;
