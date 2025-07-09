import withDataFetching from "@/hoc/withDataFetching";
import Page from "../Components/HocFetch";

const PageWithData = withDataFetching(Page);

export default PageWithData;
