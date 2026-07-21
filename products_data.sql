--
-- PostgreSQL database dump
--

\restrict hhHmQXdos5EapMd24CfhawcvOPoOcxKc5h8NCzuSehELFvWDed3MGnghd2E55Tk

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('b0c489af-eb93-420f-bcbe-0ea20ffe0278', 'infinix-hot-40', 'Infinix Hot 40', 'Gamer-friendly with 120Hz display and 90W fast charging.', 2499900, '/products/infinix-hot-40.jpg', 2, 'phones', '2026-06-10 02:40:00.420042+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('24b53fb0-9698-4ee6-bff7-d65bd563bccc', 'oraimo-powerbank', 'Oraimo 20000mAh Power Bank', 'Charges your phone five times. Fast charging in and out.', 250000, '/products/oraimo-pb.jpg', 27, 'accessories', '2026-06-10 02:40:00.420042+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('df917bc0-5a65-4415-af3a-222280fd6cc4', 'samsung-a05', 'Samsung A05', 'Entry-level Samsung with solid build and good battery.', 1899900, '/products/samsung-a05.jpg', 4, 'phones', '2026-06-10 02:40:00.420042+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('eb0eabf9-291c-4614-8166-8fdacb428fd9', 'tecno-spark-10', 'Tecno Spark 10', 'Budget Android with 6.6 inch screen and 50MP camera.', 1599900, '/products/tecno-spark.jpg', 8, 'phones', '2026-06-10 02:40:00.420042+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('a7efe955-a266-4711-b5e4-ddd5934d6dac', 'nokia-105', 'Nokia 105', 'Dual SIM feature phone with FM radio. Lasts days on one charge.', 250000, '/products/nokia-105.jpg', 43, 'phones', '2026-06-10 02:40:00.420042+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('69793070-2279-413d-96c9-9e5974941c31', 'itel-a70', 'Itel A70', 'Affordable smartphone with big battery and dual camera setup.', 1299900, '/products/itel-a70.jpg', 15, 'phones', '2026-07-21 02:19:35.244806+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('3ce64720-2b93-4492-bb2f-77571a1ac534', 'anker-cable', 'Anker USB-C Cable 1m', 'Durable fast-charging cable rated for 10000+ bends.', 90000, '/products/anker-cable.jpg', 60, 'accessories', '2026-07-21 02:19:35.244806+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('85c48645-bac7-4b25-b465-76d27ef535cb', 'jbl-earbuds', 'JBL Wave Buds', 'Wireless earbuds with deep bass and 20hr battery life.', 450000, '/products/jbl-earbuds.jpg', 12, 'accessories', '2026-07-21 02:19:35.244806+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('45160b8d-09e0-4045-8712-211d5fbf23cc', 'xiaomi-redmi-13c', 'Xiaomi Redmi 13C', 'Large display, 50MP AI camera, and long-lasting battery.', 1749900, '/products/redmi-13c.jpg', 6, 'phones', '2026-07-21 02:19:35.244806+03');
INSERT INTO public.products (id, slug, name, description, price_cents, image_url, stock, category, created_at) VALUES ('aeb68e30-755a-4433-98a9-b20718b1fa06', 'oraimo-charger', 'Oraimo 33W Fast Charger', 'Compact wall charger with dual USB ports.', 120000, '/products/oraimo-charger.jpg', 34, 'accessories', '2026-07-21 02:19:35.244806+03');


--
-- PostgreSQL database dump complete
--

\unrestrict hhHmQXdos5EapMd24CfhawcvOPoOcxKc5h8NCzuSehELFvWDed3MGnghd2E55Tk

