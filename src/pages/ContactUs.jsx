
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import usePageTitle from '../hooks/usePageTitle';

const ContactUs = () => {
  usePageTitle('Contact Us');
  const contacts = [
    {
      title: 'Golf Course',
      icon: '⛳',
      details: [
        {
          label: 'Alamat',
          value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia, 40135',
          href: 'https://maps.google.com/?q=JL.+Lapangan+Golf+Dago+Atas+No.78+Bandung',
          icon: '📍',
        },
        {
          label: 'Phone',
          value: '+62 222 502 567',
          href: 'tel:+622225025670',
          icon: '📞',
        },
        {
          label: 'Reservasi',
          value: '+62 0811 2233 1917',
          href: 'tel:+6208112233191',
          icon: '📅',
        },
        {
          label: 'Email',
          value: 'dagoheritage1917@gmail.com',
          href: 'mailto:dagoheritage1917@gmail.com',
          icon: '✉️',
        },
        {
          label: 'Instagram',
          value: '@dagoheritage_1917',
          href: 'https://instagram.com/dagoheritage_1917',
          icon: '📸',
        },
      ],
    },
    {
      title: 'Driving Range',
      icon: '🏌️',
      details: [
        {
          label: 'Alamat',
          value: 'JL. Lapangan Golf Dago Atas No.78, Bandung, West Java, Indonesia, 40135',
          href: 'https://maps.google.com/?q=JL.+Lapangan+Golf+Dago+Atas+No.78+Bandung',
          icon: '📍',
        },
        {
          label: 'Call Center',
          value: '+62 0811 234 1917',
          href: 'tel:+620811234191',
          icon: '📞',
        },
        {
          label: 'Email',
          value: 'Marketing.driving@dagoheritage1917.com',
          href: 'mailto:Marketing.driving@dagoheritage1917.com',
          icon: '✉️',
        },
        {
          label: 'Instagram',
          value: '@dagodriving',
          href: 'https://instagram.com/dagodriving',
          icon: '📸',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-light-bg font-body">
      {/* Page Header */}
      <div className="bg-dark-bg pt-28 pb-16 px-4 text-center">
        <SectionTitle
          title="Contact Us"
          subtitle="Hubungi Kami"
          align="center"
          theme="light"
        />
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <AnimatedSection direction="up" delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contacts.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className="bg-golf-green px-8 py-6 flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="font-heading text-2xl text-white">{section.title}</h2>
                </div>

                {/* Card Body */}
                <div className="px-8 py-6 space-y-5">
                  {section.details.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-golf-gold uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-700 hover:text-golf-green transition-colors duration-200 break-words text-sm leading-relaxed"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Map Embed */}
        <AnimatedSection direction="up" delay={0.15} style={{ marginTop: '3rem' }}>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-golf-green px-8 py-4 flex items-center gap-2">
              <span className="text-white text-lg">📍</span>
              <h3 className="font-heading text-white text-xl">Lokasi Kami</h3>
            </div>
            <iframe
              title="Dago Heritage Golf Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.6191!3d-6.8721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMjAuMCJTIDEwN8KwMzcnMDguOCJF!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default ContactUs
