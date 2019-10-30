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
        {/* <ListItem className="example_list--arrow">
                    Unordered List level 1
                </ListItem>
                <ListItem>
                    Unordered List level 1
                </ListItem>
                <ListItem>
                    Unordered List level 1
                </ListItem> */}
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
      // <ol class="bx--list--ordered">
      // <li class="bx--list__item">Ordered List level 1
      //     <ol class="bx--list--nested">
      //     <li class="bx--list__item">Ordered List level 2</li>
      //     <li class="bx--list__item">Ordered List level 2</li>
      //     </ol>
      // </li>
      // <li class="bx--list__item">Ordered List level 1</li>
      // <li class="bx--list__item">Ordered List level 1</li>
      // </ol>
    );
  }
}

ExampleList.displayName = 'ExampleList';
ExampleList.propTypes = {
  examples: PropTypes.node.isRequired,
};
