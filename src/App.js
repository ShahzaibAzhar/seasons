import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/SearchScreen/ImageList";
//import SeasonComponent from "./components/SeasonScreen/SeasonComponent";
import SearchBar from "./components/SearchScreen/SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const resp = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: resp.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
