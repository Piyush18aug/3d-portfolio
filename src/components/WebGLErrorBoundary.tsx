import { Component, ReactNode } from "react";

type WebGLErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type WebGLErrorBoundaryState = {
  hasError: boolean;
};

class WebGLErrorBoundary extends Component<
  WebGLErrorBoundaryProps,
  WebGLErrorBoundaryState
> {
  state: WebGLErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch() {}

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default WebGLErrorBoundary;