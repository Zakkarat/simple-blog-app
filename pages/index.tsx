import Layout from "../src/components/Layout";
import Posts from "../src/components/Posts";
import { MDBContainer } from "mdbreact";

const IndexPage = () => (
  <Layout>
    <MDBContainer className="d-flex align-items-center flex-column">
      <Posts></Posts>
    </MDBContainer>
  </Layout>
);

export default IndexPage;
