import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Post } from "./Post";

test("renders message", () => {
  // Arrange
  const post = {
    message: "Post message",
    imageUrl: "Image url",
    createdAt: "2022/04/05 11:00",
    postedBy: {
      name: "User name",
    },
  };

  // Act
  render(<Post post={post} />);
  const messageElement = screen.getByText(/post message/i);

  // Assert
  expect(messageElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  // Arrange
  const post = {
    message: "Post message",
    imageUrl: "Image url",
    createdAt: "2022/04/05 11:00",
    postedBy: {
      name: "User name",
    },
  };

  // Act
  const tree = renderer
    .create(<Post post={post} />)
    .toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});
