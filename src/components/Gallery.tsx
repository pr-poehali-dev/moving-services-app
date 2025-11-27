import { Card } from '@/components/ui/card';

const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/4d0b2b58-49dd-479a-b1b1-ef68e3364a05/files/38fd9e70-ef25-4765-b49c-835b27572ae1.jpg',
    title: 'Грузоперевозки',
    description: 'Доставка груза по городу'
  },
  {
    url: 'https://cdn.poehali.dev/projects/4d0b2b58-49dd-479a-b1b1-ef68e3364a05/files/772ad815-eb33-4e3f-a7fd-ebb1413e9088.jpg',
    title: 'Услуги грузчиков',
    description: 'Профессиональная команда'
  },
  {
    url: 'https://cdn.poehali.dev/projects/4d0b2b58-49dd-479a-b1b1-ef68e3364a05/files/dade0c82-6451-4edd-a396-06b87c1d54bb.jpg',
    title: 'Демонтажные работы',
    description: 'Качественный демонтаж'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Галерея работ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных заказов наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
