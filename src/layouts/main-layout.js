import { SubReddit } from "../Components/SubReddit/SubReddit";

export function MainLayout({ Header, Body, Loader }) {
  return (
    <div className="App">
      <SubReddit
        showSidebar={sidebar}
        getSubData={getSubData}
        isMobile={isMobile}
      />
      <div className="Header">
        <Header></Header>
      </div>
      {isLoading ? <Loader></Loader> : <Body></Body>}
    </div>
  );
}
