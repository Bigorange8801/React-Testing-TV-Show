import React from 'react';
import Episodes from "./Episodes";

import { render } from "@testing-library/react";




it("renders without crashing", () => {
    render(<Episodes episodes={[]} />);
  });

