import Layout from "../src/components/Layout";
import Posts from "../src/components/Posts";
import { MDBContainer } from "mdbreact";

const IndexPage = () => (
  <Layout>
    <MDBContainer className="mt-3 d-flex justify-content-center">
      <Posts></Posts>
    </MDBContainer>
  </Layout>
);

export default IndexPage;
