import { FunctionComponent } from 'react';

type Props = {
  text: string;
};

const GradientText: FunctionComponent<Props> = ({ text }) => {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">
      <h1 className="text-9xl font-black text-center">
        <span className="gradient-color">{text}</span>
      </h1>
    </div>
  );
};

export default GradientText;
