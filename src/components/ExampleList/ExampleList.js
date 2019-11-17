import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UnorderedList, ListItem, Link } from 'carbon-components-react';

function formatDate(date) {
  return new Date(date).toDateString();
}

export default class ExampleList extends Component {
  render() {
    let example_list = this.props.examples;
    return (
      <UnorderedList nested={false}>
        {example_list.map(({ node }) => (
          <ListItem className="example_list--arrow">
            <Link href={node.frontmatter.path}>
              <span>
                {node.frontmatter.title} - {formatDate(node.frontmatter.date)}
              </span>
              <i> {node.frontmatter.prelude} </i>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    );
  }
}

ExampleList.displayName = 'ExampleList';
ExampleList.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.node).isRequired,
};
