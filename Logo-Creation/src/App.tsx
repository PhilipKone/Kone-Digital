import { NeonConeLogo } from "./components/NeonConeLogo";
import { KDMonogramLogo } from "./components/KDMonogramLogo";
import { HexagonConeLogo } from "./components/HexagonConeLogo";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090B10] p-8 text-white">
      <div className="text-center space-y-12 max-w-4xl w-full">
        {/* KD Monogram Logo */}
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <KDMonogramLogo size={300} glow={true} />
          </div>
          <h1 className="text-4xl font-bold tracking-wider" style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0,255,255,0.4)' }}>KONE DIGITAL</h1>
          <p className="text-gray-400">Concept 1: The "KD" Hexagon Monogram (Distinct from Kone Code)</p>
        </div>

        {/* Neon Cone Logo */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div className="flex items-center justify-center">
            <NeonConeLogo size={300} glow={true} />
          </div>
          <h1 className="text-4xl font-bold tracking-wider" style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0,255,255,0.4)' }}>KONE DIGITAL</h1>
          <p className="text-gray-400">Concept 2: The Neon Cone Tag (Ecosystem alignment)</p>
        </div>

        {/* Hexagon Cone Logo */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div className="flex items-center justify-center">
            <HexagonConeLogo size={300} glow={true} />
          </div>
          <h1 className="text-4xl font-bold tracking-wider" style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0,255,255,0.4)' }}>KONE DIGITAL</h1>
          <p className="text-gray-400">Concept 3: The Hexagon Cone (Perfect agency/ecosystem blend)</p>
        </div>

        {/* Size Comparison */}
        <div className="pt-16 border-t border-gray-800">
          <h2 className="text-xl mb-8">Size Comparison</h2>
          <div className="flex items-center justify-center gap-8">
            <NeonConeLogo size={64} />
            <NeonConeLogo size={120} />
            <NeonConeLogo size={200} />
          </div>
        </div>
      </div>
    </div>
  );
}