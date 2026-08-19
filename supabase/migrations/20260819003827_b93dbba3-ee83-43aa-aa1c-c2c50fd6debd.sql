CREATE TABLE public.corp_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  content text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT 'Groupe',
  image_url text,
  published boolean NOT NULL DEFAULT true,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.corp_news TO anon;
GRANT SELECT ON public.corp_news TO authenticated;
GRANT ALL ON public.corp_news TO service_role;

ALTER TABLE public.corp_news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read published news"
ON public.corp_news FOR SELECT
TO anon, authenticated
USING (published = true);

CREATE TRIGGER trg_corp_news_updated
BEFORE UPDATE ON public.corp_news
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.corp_news (title, excerpt, content, category, published_at) VALUES
('Eburnie Corporation officialise sa structure de holding multisectorielle en Côte d''Ivoire', 'Le groupe finalise sa gouvernance et confirme son ancrage ivoirien.', 'Le groupe Eburnie Corporation finalise sa gouvernance et confirme son ancrage ivoirien avec six filiales opérationnelles.', 'Groupe', '2026-06-05'),
('Eburnie Cargo renforce son réseau logistique au départ d''Abidjan', 'Nouveaux corridors logistiques au départ du port d''Abidjan.', 'Eburnie Cargo développe de nouveaux corridors logistiques au départ du port d''Abidjan.', 'Cargo', '2026-05-28'),
('Eburnie Boutique dépasse les 10 000 références produits', 'Une croissance soutenue du catalogue sur le marché ivoirien.', 'Le catalogue d''Eburnie Boutique franchit le cap des 10 000 références.', 'Boutique', '2026-05-20'),
('Mission de sourcing stratégique à Guangzhou', 'Renforcement des partenariats fournisseurs chinois pour les importateurs ivoiriens.', 'Eburnie China Deals renforce ses partenariats fournisseurs en Chine.', 'China Deals', '2026-05-12'),
('Lancement du premier projet résidentiel premium à Abidjan', 'Eburnie Immobilier ouvre la commercialisation de sa première résidence.', 'Eburnie Immobilier lance la commercialisation de sa première résidence premium à Abidjan.', 'Immobilier', '2026-05-01'),
('Forum ivoirien des investisseurs 2026', 'Eburnie Event accueille 500 décideurs économiques à Abidjan.', 'Eburnie Event organise le Forum ivoirien des investisseurs 2026 à Abidjan.', 'Event', '2026-04-20');