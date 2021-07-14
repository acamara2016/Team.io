import React from 'react';

export default function withDataFetching(WrappedComponent) {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: true,
        error: '',
      };
    }

    async componentDidMount() {
      try {
        const data = await fetch("https://csci4177-individual-acamara.herokuapp.com/tickets");

        const dataJSON = await data.json();

        if (dataJSON) {
          console.log(data)
          console.log(dataJSON)
          this.setState({
            data: dataJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    render() {
      const { data, loading, error } = this.state;

      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
}
