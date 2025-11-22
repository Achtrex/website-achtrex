export const SectionTitle = ({ children, subtitle, className = '' }: { children: React.ReactNode; subtitle?: React.ReactNode; className?: string }) => (
    <div className={`text-center mb-16 ${className}`}>
        {subtitle && <p className="text-cyan-500 font-semibold text-sm uppercase tracking-wider mb-3">{subtitle}</p>}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{children}</h2>
    </div>
);