import { Pen, Link } from "lucide-react";

const RightSidebar = () => {
  return (
    <>
    <div className="w-80 bg-gray-200 shadow-lg p-6">
      {/* The Overflow Blog */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">The Overflow Blog</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Pen size={16} />
            <span className="text-sm p-2">The unexpected benefits of mentoring others</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Pen size={16} />
            <span className="text-sm p-2">Podcast 354: Building for AR with Niantic Labs&apos; augmented reality SDK</span>
          </div>
        </div>
      </section>

      {/* Featured & Meta */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Featured & meta</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <Link size={16} />
          <span className="text-sm p-2">Beta release of Collective&trade; on Stack Overflow</span>
        </div>
      </section>
    </div>

    <div className="w-80 shadow-lg p-6 bg-gray-300">
        {/* Hot Meta Post */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hot Meta Post</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-lg font-bold">8</span>
            <span className="text-sm p-2">Tags (driver) and (device-driver) appear to be redundant</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-lg font-bold">27</span>
            <span className="text-sm p-2">How to handle dupes where A is closed as dup of B but I have an answer that...</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-lg font-bold">27</span>
            <span className="text-sm p-2">Ambiguous tag (containers)</span>
          </div>
        </div>
      </section>
    </div>

    <div className="w-80 p-6 bg-white">
        {/* Custom Filter */}
    <section>
        <h2 className="text-xl font-semibold mb-2">Custom filter</h2>
        <div className="space-y-2 border-2 rounded-sm border-gray-300 p-2">
          <a
            href="#"
            className="flex items-center space-x-2 text-sm text-blue-500 hover:text-orange-500 hover:underline"
          >
            <span>add custom filter</span>
          </a>
        </div>
      </section>
    </div>
    </>
  );
};

export default RightSidebar;
