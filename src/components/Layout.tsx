import { PageProps } from "gatsby";
import React from "react";

interface Props {
  children: any;
}

class Layout extends React.Component<PageProps<Props>> {
  render() {
    return (
      <>
        <header>
          <h1>Gatsby Demo</h1>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>
        <br />
        {this.props.children}
        <br />
        <footer>
          Check the lighthouse results at
          <a
            href="https://lighthouse-test.github.io"
            rel="noopener"
            target="_blank"
          >
            https://lighthouse-test.github.io
          </a>
        </footer>
      </>
    );
  }
}

export default Layout;
