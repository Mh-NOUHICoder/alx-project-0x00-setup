// pages/landing.tsx
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Landing Page</h1>
        <p className="text-gray-500 mt-2">Showcasing button styles and reusable components</p>
      </header>

      {/* Featured card */}
      <div className="flex justify-center mb-16">
        <Card />
      </div>

      {/* Size variations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Size Variations</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Small Button" size="small" styles="bg-gray-100 text-gray-900 hover:bg-gray-200" />
          <Button title="Medium Button" size="medium" styles="bg-gray-800 text-white hover:bg-gray-900" />
          <Button title="Large Button" size="large" styles="bg-black text-white hover:opacity-95" />
        </div>
      </section>

      {/* Shape variations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shape Variations</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Rounded Small" shape="rounded-sm" styles="bg-blue-600 text-white hover:bg-blue-700" />
          <Button title="Rounded Medium" shape="rounded-md" styles="bg-green-600 text-white hover:bg-green-700" />
          <Button title="Rounded Full" shape="rounded-lg" styles="bg-pink-500 text-white hover:bg-pink-600" />
        </div>
      </section>

      {/* Custom styles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Custom Styles</h2>
        <div className="flex gap-4 flex-wrap">
          <Button title="Primary" styles="bg-blue-600 text-white hover:bg-blue-700" />
          <Button title="Secondary" styles="bg-gray-600 text-white hover:bg-gray-700" />
          <Button title="Success" styles="bg-green-500 text-white hover:bg-green-600" />
          <Button title="Danger" styles="bg-red-500 text-white hover:bg-red-600" />
        </div>
      </section>

      {/* Combination examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Combination Examples</h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            title="Small Rounded Full"
            size="small"
            shape="rounded-lg"
            styles="bg-purple-500 text-white hover:bg-purple-600"
          />
          <Button
            title="Large Rounded Small"
            size="large"
            shape="rounded-sm"
            styles="bg-yellow-500 text-black hover:bg-yellow-600"
          />
          <Button
            title="Medium Rounded Full"
            size="medium"
            shape="rounded-lg"
            styles="bg-pink-500 text-white hover:bg-pink-600"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
