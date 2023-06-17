import axios from "axios";

import { SplitScreen } from "./components/SplitScreen";
import LeftHandComponent from "./components/LeftHandComponents";
import RightHandComponent from "./components/RightHandComponents";
import { SmallPersonListItem } from "./components/people/SmallPersonListItem";
import { LargePersonListItem } from "./components/people/LargePersonListItem";

import { List } from "./components/List";
import { people } from "./data";
import { CurrentUserLoader } from "./components/CurrentUserLoader";
import { UserInfo } from "./components/UserInfo";
import { ResourceLoader } from "./components/ResourceLoader";
import { DataSource } from "./components/DataSource";
import { useState } from "react";
import { ControlledModal } from "./components/ControlledModal";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      {/* <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
      <List
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <List
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      /> */}
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}
      {/* <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader> */}
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
