(() => {
  'use strict';

  /* =========================================================================
     MERIDIAN — SHARED MULTI-PAGE DATA CATALOG & INTERACTIVE SHELL
     ========================================================================= */
  const PAGE_ORDER = ['index.html', 'adventures.html', 'destinations.html', 'packages.html', 'about.html', 'contact.html'];

  const DATA = {
    adventures: [
      {
        id: 'mountain-trekking',
        category: 'Mountain Trekking',
        terrain: 'mountain',
        location: 'Ladakh & Patagonia',
        coords: '34.15° N · 77.57° E',
        difficulty: 'Challenging',
        level: 3,
        duration: '6 – 12 Days',
        altitude: '4,900M MAX',
        priceNum: 1290,
        price: '$1,290',
        gear: 'Crampons, trekking poles, 4-season tents & pulse-ox telemetry',
        tagline: 'High-altitude ridgelines, glacial passes & dawn camps above 4,500m.',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1100&q=85',
        tint: '#B9DDE8'
      },
      {
        id: 'skydiving',
        category: 'Skydiving',
        terrain: 'air',
        location: 'Queenstown & Interlaken',
        coords: '45.03° S · 168.66° E',
        difficulty: 'Extreme',
        level: 4,
        duration: '1 – 2 Days',
        altitude: '15,000 FT EXIT',
        priceNum: 420,
        price: '$420',
        gear: 'Dual-AAD tandem rig, thermal jumpsuit, wrist altimeter & 4K camera',
        tagline: '15,000 ft open-door exit over mirror glacial lakes and alpine summits.',
        image: 'https://images.unsplash.com/photo-1474623809196-26c1d33457cc?auto=format&fit=crop&w=1100&q=85',
        tint: '#C9BDEB'
      },
      {
        id: 'scuba-diving',
        category: 'Scuba Diving',
        terrain: 'water',
        location: 'Nusa Penida, Bali',
        coords: '8.72° S · 115.54° E',
        difficulty: 'Moderate',
        level: 2,
        duration: '3 – 6 Days',
        altitude: '30M DEPTH',
        priceNum: 580,
        price: '$580',
        gear: '5mm wetsuit, dive computer, SMB drift buoy & Nitrox tanks',
        tagline: 'Drift crystal volcanic reef drop-offs alongside pelagic manta rays.',
        image: 'https://images.unsplash.com/photo-1682687982049-b3d433368cd1?auto=format&fit=crop&w=1100&q=85',
        tint: '#B9DDE8'
      },
      {
        id: 'rock-climbing',
        category: 'Rock Climbing',
        terrain: 'mountain',
        location: 'Dolomites & Swiss Alps',
        coords: '46.54° N · 7.98° E',
        difficulty: 'Hard',
        level: 3,
        duration: '4 – 7 Days',
        altitude: '3,200M WALLS',
        priceNum: 760,
        price: '$760',
        gear: 'UIAA helmet, climbing harness, dynamic twin ropes & trad rack',
        tagline: 'Guided multi-pitch granite spires and sun-baked limestone cliffs.',
        image: 'https://images.unsplash.com/photo-1757496106249-e3a9781c0765?auto=format&fit=crop&w=1100&q=85',
        tint: '#FFC7A8'
      },
      {
        id: 'paragliding',
        category: 'Paragliding',
        terrain: 'air',
        location: 'Swiss Alps & Bir Billing',
        coords: '46.80° N · 9.83° E',
        difficulty: 'Beginner+',
        level: 1,
        duration: '2 – 5 Days',
        altitude: '2,900M LAUNCH',
        priceNum: 290,
        price: '$290',
        gear: 'EN-certified wing, reserve chute, vario & helmet intercom',
        tagline: 'Step off snow-dusted ridges and ride golden afternoon valley thermals.',
        image: 'https://images.unsplash.com/photo-1659868406803-8a58db1230e0?auto=format&fit=crop&w=1100&q=85',
        tint: '#F5E5A5'
      },
      {
        id: 'river-rafting',
        category: 'River Rafting',
        terrain: 'water',
        location: 'Rishikesh, India',
        coords: '30.08° N · 78.26° E',
        difficulty: 'Moderate',
        level: 2,
        duration: '2 – 4 Days',
        altitude: 'CLASS III – IV',
        priceNum: 340,
        price: '$340',
        gear: 'High-buoyancy PFD, dry-bag, river helmet & safety rescue kayakers',
        tagline: 'Carve emerald Himalayan gorges through thunderous Class-III & IV rapids.',
        image: 'https://images.unsplash.com/photo-1760904652241-36ad6b4e752f?auto=format&fit=crop&w=1100&q=85',
        tint: '#C6E5D1'
      },
      {
        id: 'desert-safari',
        category: 'Desert Safari',
        terrain: 'desert',
        location: 'Sahara & Thar Dunes',
        coords: '31.10° N · 4.01° W',
        difficulty: 'Easy – Mod',
        level: 1,
        duration: '4 – 6 Days',
        altitude: '150M DUNES',
        priceNum: 690,
        price: '$690',
        gear: 'Expedition 4x4 support, sandboards, astronomer telescope & bivouac camp',
        tagline: '4x4 dune traverses, amber twilight ridges, and silent nomadic star camps.',
        image: 'https://images.unsplash.com/photo-1486314030120-d5ab85fe58cd?auto=format&fit=crop&w=1100&q=85',
        tint: '#FFC7A8'
      },
      {
        id: 'camping-hiking',
        category: 'Camping & Hiking',
        terrain: 'mountain',
        location: 'Spiti & Milford Sound',
        coords: '32.24° N · 78.03° E',
        difficulty: 'All Levels',
        level: 1,
        duration: '3 – 7 Days',
        altitude: '4,270M CAMP',
        priceNum: 480,
        price: '$480',
        gear: 'Geodesic dome tents, -15°C down bags, solar lanterns & chef kitchen',
        tagline: 'Backcountry alpine bivouacs glowing softly beneath zero-light-pollution skies.',
        image: 'https://images.unsplash.com/photo-1721804980471-ae2ed4556080?auto=format&fit=crop&w=1100&q=85',
        tint: '#C9BDEB'
      }
    ],

    destinations: [
      {
        name: 'Ladakh',
        country: 'India',
        region: 'himalaya',
        coords: '34.1526° N · 77.5771° E',
        elevation: '4,350M AVG',
        season: 'Jun – Sep',
        months: [6, 7, 8, 9],
        climate: 'High Alpine Desert',
        shortDesc: 'Cobalt Himalayan lakes, prayer-flag mountain passes, and austere moonscapes carved by glaciers.',
        longDesc: 'Perched between the Karakoram and Great Himalayan ranges, Ladakh rewards explorers with dramatic high-altitude passes, shimmering Pangong Tso, centuries-old cliff monasteries, and crystal desert air.',
        activities: ['High-Pass Trekking', 'Overland 4x4', 'Stargazing Camps', 'Zanskar Rafting'],
        image: 'https://images.unsplash.com/photo-1652204597589-962156b9483d?auto=format&fit=crop&w=1200&q=85',
        tint: '#B9DDE8'
      },
      {
        name: 'Rishikesh',
        country: 'India',
        region: 'himalaya',
        coords: '30.0869° N · 78.2676° E',
        elevation: '372M – 1,400M',
        season: 'Oct – May',
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        climate: 'Himalayan Foothills',
        shortDesc: 'Emerald whitewater canyons bursting from forested Himalayan ridges with cliff jumps and riverside camps.',
        longDesc: 'Where the glacial Ganges cuts through verdant Shivalik gorges, Rishikesh unites high-adrenaline Class-IV whitewater expeditions, canyon rappelling, and serene sunrise river beaches.',
        activities: ['Class-IV Rafting', 'Kayak Clinics', 'Bungee & Swing', 'Foothill Trekking'],
        image: 'https://images.unsplash.com/photo-1610052994939-f4fd8813caad?auto=format&fit=crop&w=1200&q=85',
        tint: '#C6E5D1'
      },
      {
        name: 'Spiti Valley',
        country: 'India',
        region: 'himalaya',
        coords: '32.2461° N · 78.0349° E',
        elevation: '4,270M AVG',
        season: 'May – Oct',
        months: [5, 6, 7, 8, 9, 10],
        climate: 'Cold Mountain Desert',
        shortDesc: 'A remote Tibetan-border amphitheater of dramatic ochre cliffs, ancient gompas, and fossil-lined trails.',
        longDesc: 'Known as the Middle Land, Spiti Valley offers raw stillness at the roof of Himachal: winding cliffside roads, 1,000-year-old monasteries, snow-leopard valleys, and the darkest night skies in Asia.',
        activities: ['Village-to-Village Treks', 'Astrophotography', 'High-Altitude Biking', 'Monastery Trails'],
        image: 'https://images.unsplash.com/photo-1542892615-c300a81a259a?auto=format&fit=crop&w=1200&q=85',
        tint: '#FFC7A8'
      },
      {
        name: 'Bali',
        country: 'Indonesia',
        region: 'tropics',
        coords: '8.4095° S · 115.1889° E',
        elevation: '0M – 3,031M',
        season: 'Apr – Oct',
        months: [4, 5, 6, 7, 8, 9, 10],
        climate: 'Tropical Volcanic',
        shortDesc: 'Dawn hikes up smoking volcanic calderas, hidden jungle waterfalls, and deep turquoise reef walls.',
        longDesc: 'Beyond tranquil beaches lies Bali’s untamed interior: Mount Agung ridge climbs, canyon waterfall abseiling in Munduk, and thrilling drift dives across Nusa Penida’s vibrant coral gardens.',
        activities: ['Volcano Sunrise Treks', 'Scuba Drift Diving', 'Canyoning', 'Reef Freediving'],
        image: 'https://images.unsplash.com/photo-1695611280324-a5f9b8e8594e?auto=format&fit=crop&w=1200&q=85',
        tint: '#C6E5D1'
      },
      {
        name: 'Swiss Alps',
        country: 'Switzerland',
        region: 'alpine',
        coords: '46.5422° N · 7.9821° E',
        elevation: '1,620M – 4,478M',
        season: 'Jun – Sep / Jan – Mar',
        months: [1, 2, 3, 6, 7, 8, 9],
        climate: 'Glacial Alpine',
        shortDesc: 'Granite spires piercing cerulean skies, thermal paragliding corridors, and mirror alpine tarns.',
        longDesc: 'From Zermatt’s unmistakable Matterhorn silhouette to Interlaken’s soaring launch ridges, the Swiss Alps deliver precision-crafted hut-to-hut traverses, via ferratas, and unforgettable aerial flights.',
        activities: ['Alpine Paragliding', 'Via Ferrata', 'Glacier Hiking', 'Rock Climbing'],
        image: 'https://images.unsplash.com/photo-1531743579253-fa8d52993ba5?auto=format&fit=crop&w=1200&q=85',
        tint: '#C9BDEB'
      },
      {
        name: 'Queenstown',
        country: 'New Zealand',
        region: 'alpine',
        coords: '45.0312° S · 168.6626° E',
        elevation: '310M – 2,319M',
        season: 'Nov – Apr',
        months: [1, 2, 3, 4, 11, 12],
        climate: 'Southern Alpine',
        shortDesc: 'The world’s adrenaline capital sculpted by glacial fjords, jagged Southern Alps peaks, and turquoise rivers.',
        longDesc: 'Framed by Lake Wakatipu and The Remarkables, Queenstown is a natural playground for 15,000-foot tandem skydives, remote heli-camp ridge treks, and glacial fjord sea-kayaking.',
        activities: ['15,000ft Skydiving', 'Heli-Camp Trekking', 'Canyon Swings', 'Fjord Kayaking'],
        image: 'https://images.unsplash.com/photo-1530355907237-d4d1fd639c84?auto=format&fit=crop&w=1200&q=85',
        tint: '#F5E5A5'
      }
    ],

    packages: [
      {
        id: 'zanskar-traverse',
        filter: 'mountain',
        destination: 'Ladakh, India',
        activity: 'Mountain Trekking',
        title: 'Zanskar High-Pass Traverse',
        duration: '8 Days / 7 Nights',
        days: 8,
        difficulty: 'Challenging',
        groupSize: 'Max 8',
        nextDeparture: 'Jul 14, 2027 · 3 Spots Left',
        priceNum: 1490,
        price: '$1,490',
        desc: 'Cross two 4,900-meter Himalayan passes, sleep beside mirror glacial lakes, and connect remote Buddhist villages with IFMGA-trained Ladakhi expedition leaders.',
        itinerary: [
          { phase: 'Days 01 – 02 · Acclimatize', detail: 'Arrive in Leh (3,500m), sunset hike to Shanti ridge, gear audit & pulse-ox checks.' },
          { phase: 'Days 03 – 06 · High Passes', detail: 'Trek across sunlit canyon valleys and crest Kongmaru La with panoramic Karakoram views.' },
          { phase: 'Days 07 – 08 · Pangong & Celebrate', detail: 'Overland drive to Pangong Tso shore camp, starlight dinner & morning departure.' }
        ],
        image: 'https://images.unsplash.com/photo-1658077589366-3b141d7bc277?auto=format&fit=crop&w=1300&q=85',
        tint: '#B9DDE8'
      },
      {
        id: 'interlaken-glide',
        filter: 'air',
        destination: 'Swiss Alps, Switzerland',
        activity: 'Paragliding & Ridge',
        title: 'Interlaken Thermal Glide',
        duration: '5 Days / 4 Nights',
        days: 5,
        difficulty: 'Beginner+',
        groupSize: 'Max 6',
        nextDeparture: 'Jun 22, 2027 · 2 Spots Left',
        priceNum: 1850,
        price: '$1,850',
        desc: 'Soar in tandem above glacial turquoise lakes, conquer an alpine via ferrata suspended over Lauterbrunnen Valley, and unwind in minimalist timber mountain lodges.',
        itinerary: [
          { phase: 'Days 01 – 02 · Launch Window', detail: 'Ground-school briefing & dual tandem ridge flights from Beatenberg and First.' },
          { phase: 'Days 03 – 04 · Vertical Alps', detail: 'Guided Mürren via ferrata traverse + glacier hike beneath the Eiger north face.' },
          { phase: 'Day 05 · Dawn Descent', detail: 'Sunrise ridge coffee overlooking Lake Brienz & Swiss rail transfer.' }
        ],
        image: 'https://images.unsplash.com/photo-1754157384965-90b8151ae8f3?auto=format&fit=crop&w=1100&q=85',
        tint: '#F5E5A5'
      },
      {
        id: 'bali-manta-reef',
        filter: 'water',
        destination: 'Bali, Indonesia',
        activity: 'Scuba Diving',
        title: 'Nusa Penida Deep Reef',
        duration: '6 Days / 5 Nights',
        days: 6,
        difficulty: 'Moderate',
        groupSize: 'Max 8',
        nextDeparture: 'May 09, 2027 · 4 Spots Left',
        priceNum: 1120,
        price: '$1,120',
        desc: 'Six guided boat dives across Crystal Bay and Manta Point paired with a pre-dawn volcanic crater ascent and cliffside boutique stays.',
        itinerary: [
          { phase: 'Days 01 – 02 · Reef Check', detail: 'Refresher lagoon dive, buoyant drift skills & sunset cliff bonfire.' },
          { phase: 'Days 03 – 04 · Manta & Walls', detail: 'Deep drift dives along vibrant vertical coral walls with marine biologist briefing.' },
          { phase: 'Days 05 – 06 · Volcano Dawn', detail: 'Guided Mount Batur sunrise ascent & jungle waterfall recovery swim.' }
        ],
        image: 'https://images.unsplash.com/photo-1533774121866-e73552547cfe?auto=format&fit=crop&w=1100&q=85',
        tint: '#B9DDE8'
      },
      {
        id: 'rishikesh-whitewater',
        filter: 'water',
        destination: 'Rishikesh, India',
        activity: 'River Rafting & Camp',
        title: 'Ganges Class-IV Expedition',
        duration: '4 Days / 3 Nights',
        days: 4,
        difficulty: 'Moderate',
        groupSize: 'Max 10',
        nextDeparture: 'Mar 18, 2027 · 5 Spots Left',
        priceNum: 590,
        price: '$590',
        desc: 'Run 48 kilometers of surging Himalayan whitewater from Devprayag to Rishikesh, camping each evening on private white-sand river beaches.',
        itinerary: [
          { phase: 'Day 01 · Safety & Warmup', detail: 'Swift-water swim drills, paddle sync & Class-III opener through forested gorges.' },
          { phase: 'Days 02 – 03 · The Big Rapids', detail: 'Navigate Roller Coaster, Golf Course & The Wall with safety kayakers on flank.' },
          { phase: 'Day 04 · Cliff Jump & Feast', detail: 'Morning river kayak clinic, canyon cliff plunge & celebratory mountain brunch.' }
        ],
        image: 'https://images.unsplash.com/photo-1762943107260-d080e13266b3?auto=format&fit=crop&w=1200&q=85',
        tint: '#C6E5D1'
      },
      {
        id: 'queenstown-heli-camp',
        filter: 'mountain',
        destination: 'Queenstown, New Zealand',
        activity: 'Skydiving & Heli-Camp',
        title: 'Southern Alps Heli-Camp',
        duration: '7 Days / 6 Nights',
        days: 7,
        difficulty: 'Challenging',
        groupSize: 'Max 6',
        nextDeparture: 'Nov 27, 2027 · 2 Spots Left',
        priceNum: 2390,
        price: '$2,390',
        desc: 'Combine a 15,000-foot freefall over Lake Wakatipu with helicopter-accessed alpine bivouac ridges and Milford fjord sea kayaking.',
        itinerary: [
          { phase: 'Days 01 – 02 · Sky & Fjord', detail: '15,000ft tandem skydive over The Remarkables + twilight jet-boat canyon run.' },
          { phase: 'Days 03 – 05 · Alpine Bivouac', detail: 'Heli-drop onto untouched Southern Alps saddle for guided ridge trekking & dome camping.' },
          { phase: 'Days 06 – 07 · Milford Waters', detail: 'Dawn sea-kayaking beneath sheer waterfall cliffs & farewell Otago vineyard dinner.' }
        ],
        image: 'https://images.unsplash.com/photo-1765114944969-57ba5e7ae5a3?auto=format&fit=crop&w=1200&q=85',
        tint: '#C9BDEB'
      },
      {
        id: 'sahara-starlight',
        filter: 'desert',
        destination: 'Sahara & Thar Frontier',
        activity: 'Desert Safari',
        title: 'Amber Dune Starlight Overland',
        duration: '5 Days / 4 Nights',
        days: 5,
        difficulty: 'Easy – Mod',
        groupSize: 'Max 8',
        nextDeparture: 'Oct 15, 2027 · 4 Spots Left',
        priceNum: 940,
        price: '$940',
        desc: 'Traverse towering crescent dunes by expedition 4x4 and sandboard down crimson slopes before sleeping under astronomer-guided desert constellations.',
        itinerary: [
          { phase: 'Days 01 – 02 · Dune Crest', detail: 'Overland trail into deep erg country, dune-driving clinic & golden-hour sandboarding.' },
          { phase: 'Days 03 – 04 · Starlight Camp', detail: 'Nomadic desert bivouac, acoustic fire circle & deep-sky telescope session.' },
          { phase: 'Day 05 · Oasis Return', detail: 'Sunrise ridge trek & spiced mountain coffee before desert exit.' }
        ],
        image: 'https://images.unsplash.com/photo-1638732984528-f255c9714619?auto=format&fit=crop&w=1200&q=85',
        tint: '#FFC7A8'
      }
    ],

    guides: [
      {
        name: 'Tenzin Norbu',
        role: 'Chief Himalayan Mountaineer',
        cert: 'IFMGA / NIM Certified · 16 Years',
        base: 'Leh, Ladakh',
        bio: 'Has led over 110 high-altitude traverses across Zanskar, Spiti, and Karakoram passes with a 100% safe-descent record.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=85'
      },
      {
        name: 'Clara Hofer',
        role: 'Alpine Paragliding & Via Ferrata Lead',
        cert: 'SHV Tandem Pilot · WFR Medic',
        base: 'Interlaken, Switzerland',
        bio: 'Former Swiss cross-country thermal pilot specializing in calm first-time flights and technical Dolomites granite climbs.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=85'
      },
      {
        name: 'Rohan Negi',
        role: 'Whitewater & Rescue Director',
        cert: 'IRF Level-4 Guide · Swiftwater Tech',
        base: 'Rishikesh, India',
        bio: 'Reads every eddy on the Alaknanda and Ganges; runs our pre-expedition river safety clinics and coastal kayak modules.',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=400&h=400&q=85'
      },
      {
        name: 'Maya Santoso',
        role: 'Marine & Volcanic Expedition Architect',
        cert: 'PADI Master Instructor · Marine Biologist',
        base: 'Nusa Penida, Bali',
        bio: 'Designs low-impact drift dive itineraries around pelagic migrations paired with sunrise volcano ridge hikes.',
        avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&h=400&q=85'
      }
    ],

    faqs: [
      { q: 'What should I pack for an adventure trip?', a: 'We send a terrain-specific packing blueprint 60 days before departure. Pack moisture-wicking merino base layers, a windproof hardshell jacket, broken-in waterproof boots, UV-400 sunglasses, and a 30L daypack. All technical safety hardware — harnesses, helmets, crampons, wetsuits, tents, and satellite beacons — is supplied and inspected by Meridian.' },
      { q: 'Are adventure activities suitable for beginners?', a: 'Absolutely. Over half of our guests are attempting their first high-altitude trek, tandem paraglide, or Class-III/IV whitewater descent. Every departure clearly lists its difficulty tier, and our guides hold unhurried ground-school briefings before launching.' },
      { q: 'Are professional guides included?', a: 'Yes — 100% of Meridian expeditions include certified lead and assistant guides tailored to the sport (IFMGA/NIM mountaineers, IRF river guides, PADI Divemasters, and tandem pilots), maintaining a strict 1:4 guide-to-explorer ratio on technical days.' },
      { q: 'What safety measures do you follow?', a: 'Every expedition carries dual Garmin inReach satellite communicators, pulse oximeters and oxygen reserves above 3,800m, wilderness first-responder (WFR) certified leads, aviation-grade daily weather windows, and pre-verified helicopter evacuation coordination.' },
      { q: 'Can I customize my adventure package?', a: 'Yes. Any departure can be converted into a private custom expedition for solo travelers, couples, or friend groups — combine regions, adjust daily elevation gains, upgrade lodges, or add an expedition photographer.' },
      { q: 'What happens if weather conditions change?', a: 'Every Meridian itinerary builds in contingency buffer windows and pre-scouted alternate routes of equal beauty. If storms halt a flight or summit push, your lead guide pivots seamlessly at zero extra surcharge.' },
      { q: 'What is your cancellation policy?', a: 'Free date transfers or 100% expedition credit up to 30 days before departure, a 75% cash refund between 30 and 15 days out, and full travel-insurance documentation if unforeseen disruptions arise inside 14 days.' }
    ]
  };

  window.MERIDIAN_DATA = DATA;

  /* =========================================================================
     DIRECTIONAL CROSS-DOCUMENT VIEW TRANSITIONS
     ========================================================================= */
  const silenceViewTransition = (vt) => {
    if (!vt) return;
    vt.ready?.catch(() => {});
    vt.finished?.catch(() => {});
    vt.updateCallbackDone?.catch(() => {});
  };

  if ('onpageswap' in window) {
    window.addEventListener('pageswap', (e) => {
      silenceViewTransition(e.viewTransition);
    });
  }

  if ('onpagereveal' in window) {
    window.addEventListener('pagereveal', (e) => {
      silenceViewTransition(e.viewTransition);
      if (!e.viewTransition || !window.navigation?.activation?.from) return;
      const getFile = (url) => {
        try {
          const p = new URL(url).pathname.split('/').pop();
          return p || 'index.html';
        } catch {
          return 'index.html';
        }
      };
      const fromIdx = PAGE_ORDER.indexOf(getFile(window.navigation.activation.from.url));
      const toIdx = PAGE_ORDER.indexOf(getFile(window.navigation.activation.entry.url));
      if (fromIdx !== -1 && toIdx !== -1 && fromIdx !== toIdx) {
        try {
          e.viewTransition.types.add(toIdx > fromIdx ? 'next' : 'previous');
        } catch {}
      }
    });
  }

  /* =========================================================================
     SHARED HELPERS: IMAGES, TOAST, LENIS, HEADER, FOOTER, MODALS, CURSOR
     ========================================================================= */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lenisInstance = null;

  function showToast(msg) {
    const el = document.getElementById('toastBanner');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove('is-visible'), 3600);
  }

  function buildFallbackSvg(title, bgHex) {
    const safe = String(title || 'MERIDIAN').replace(/[<>&"]/g, '');
    const bg = bgHex || '#B9DDE8';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${bg}"/><stop offset="100%" stop-color="#FFF8EC"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><path d="M0 440 L200 250 L360 390 L560 190 L800 380 L800 600 L0 600 Z" fill="#252B32" opacity="0.22"/><text x="50%" y="52%" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="34" letter-spacing="4" fill="#252B32">${safe}</text></svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function attachImageHandlers(root = document) {
    root.querySelectorAll('img').forEach((img) => {
      const frame = img.closest('.media-frame');
      const done = () => { if (frame) frame.classList.add('is-loaded'); };
      if (img.complete && img.naturalWidth > 0) done();
      else img.addEventListener('load', done, { once: true });
      img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = '1';
        img.src = buildFallbackSvg(img.dataset.fallbackTitle || img.alt, img.dataset.fallbackBg);
        done();
      });
    });
  }

  function injectSharedChrome() {
    const activePage = document.body.dataset.page || 'home';
    const isLightHeader = document.body.dataset.headerTheme === 'light';
    const navItems = [
      { key: 'home', href: 'index.html', label: 'Home' },
      { key: 'adventures', href: 'adventures.html', label: 'Adventures' },
      { key: 'destinations', href: 'destinations.html', label: 'Destinations' },
      { key: 'packages', href: 'packages.html', label: 'Packages' },
      { key: 'about', href: 'about.html', label: 'About Us' },
      { key: 'contact', href: 'contact.html', label: 'Contact' }
    ];

    const topChrome = `
      <a class="skip-link" href="#main-content">Skip to main content</a>
      <div class="scroll-progress-bar" aria-hidden="true"><div class="scroll-progress-fill" id="scrollProgressFill"></div></div>
      <div class="custom-cursor-dot" id="cursorDot" aria-hidden="true"></div>
      <div class="custom-cursor-ring" id="cursorRing" aria-hidden="true"><span id="cursorLabel"></span></div>

      <header class="site-header ${isLightHeader ? 'is-light-page' : ''}" id="siteHeader">
        <a href="index.html" class="brand-logo" aria-label="Meridian Home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.8" />
              <polygon points="16,4 19.5,16 16,20 12.5,16" fill="currentColor" />
              <polygon points="16,28 19.5,16 16,12 12.5,16" fill="#FFC7A8" />
              <circle cx="16" cy="16" r="2.2" fill="currentColor" />
            </svg>
          </span>
          <span>MERIDIAN</span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul class="nav-links">
            ${navItems.map((n) => `<li><a class="nav-link ${n.key === activePage ? 'is-active' : ''}" href="${n.href}" ${n.key === activePage ? 'aria-current="page"' : ''}>${n.label}</a></li>`).join('')}
          </ul>
        </nav>

        <div class="nav-actions">
          <button type="button" class="btn nav-cta magnetic" data-open-booking="General Expedition Inquiry">
            <span>Book Your Adventure</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </button>
          <button type="button" class="menu-toggle" id="mobileMenuBtn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileMenu">
            <span></span><span></span>
          </button>
        </div>
      </header>

      <div class="mobile-menu" id="mobileMenu" aria-hidden="true" data-lenis-prevent>
        <nav aria-label="Mobile Navigation">
          <ul class="mobile-menu-links">
            ${navItems.map((n, i) => `<li><a href="${n.href}"><span class="mobile-menu-num">0${i + 1}</span>${n.label}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="mobile-menu-footer">
          <div>
            <div class="coord-tag">34.1526° N · 77.5771° E</div>
            <div style="font-size: 0.85rem; margin-top: 0.25rem;">expeditions@meridianwild.com</div>
          </div>
          <button type="button" class="btn btn-primary" data-open-booking="Mobile Expedition Inquiry">
            <span>Book Your Adventure</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    `;

    const bottomChrome = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-top-grid">
            <div class="footer-brand-col">
              <div>
                <a href="index.html" class="brand-logo" aria-label="Meridian Home">
                  <span class="brand-mark" aria-hidden="true">
                    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
                      <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.8" />
                      <polygon points="16,4 19.5,16 16,20 12.5,16" fill="currentColor" />
                      <polygon points="16,28 19.5,16 16,12 12.5,16" fill="#F2A9A0" />
                      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
                    </svg>
                  </span>
                  <span>MERIDIAN</span>
                </a>
                <p class="footer-manifesto">An international adventure expedition house designing small-group mountain, air, ocean, and desert journeys for curious explorers.</p>
              </div>
              <div class="footer-contact-meta">
                <span class="footer-contact-chip">Basecamp HQ · Leh &amp; Zurich</span>
                <a class="footer-contact-chip" href="mailto:expeditions@meridianwild.com">expeditions@meridianwild.com</a>
                <a class="footer-contact-chip" href="tel:+919810442088">+91 98104 42088 / +41 44 580 2910</a>
              </div>
            </div>

            <details class="footer-col-details" open>
              <summary class="footer-col-title">Explore Pages <span class="footer-col-count" aria-hidden="true">0${navItems.length}</span></summary>
              <ul class="footer-list">
                ${navItems.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
              </ul>
            </details>

            <details class="footer-col-details" open>
              <summary class="footer-col-title">Adventures <span class="footer-col-count" aria-hidden="true">06</span></summary>
              <ul class="footer-list">
                ${DATA.adventures.slice(0, 6).map((a) => `<li><a href="adventures.html#${a.id}">${a.category}</a></li>`).join('')}
              </ul>
            </details>

            <details class="footer-col-details" open>
              <summary class="footer-col-title">Destinations <span class="footer-col-count" aria-hidden="true">0${DATA.destinations.length}</span></summary>
              <ul class="footer-list">
                ${DATA.destinations.map((d) => `<li><a href="destinations.html#${d.name.toLowerCase().replace(/\s+/g, '-')}">${d.name}, ${d.country}</a></li>`).join('')}
              </ul>
            </details>

            <div class="footer-newsletter-col">
              <div class="newsletter-card">
                <div>
                  <div class="footer-col-title" style="margin-bottom: 0.35rem;">Field Dispatch</div>
                  <p style="font-size: 0.88rem; color: var(--charcoal-soft);">Monthly coordinates, secret departure windows, and seasonal openings.</p>
                </div>
                <form class="newsletter-form" id="newsletterForm" novalidate>
                  <label for="newsletterEmail" class="sr-only">Email address</label>
                  <input id="newsletterEmail" class="newsletter-input" type="email" placeholder="explorer@domain.com" autocomplete="email" required />
                  <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.75rem 1.2rem;">
                    <span>Join Field Dispatch</span>
                    <span class="btn-arrow" aria-hidden="true">→</span>
                  </button>
                  <div class="newsletter-feedback" id="newsletterFeedback" role="status" aria-live="polite"></div>
                </form>
              </div>
            </div>
          </div>

          <div class="footer-giant-wordmark" aria-hidden="true">MERIDIAN</div>
          <div class="footer-bottom">
            <div class="footer-bottom-meta">
              <span>© 2026 MERIDIAN EXPEDITIONS LTD. ALL RIGHTS RESERVED.</span>
              <span>LEAVE NO TRACE · CERTIFIED WILDERNESS OPERATOR</span>
            </div>
            <button type="button" class="footer-top-btn" id="footerBackToTop" aria-label="Back to top of page">
              <span>Back to Top</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </footer>

      <dialog class="editorial-dialog" id="packageDialog" closedby="any" data-lenis-prevent aria-labelledby="pkgDialogTitle">
        <div class="dialog-header">
          <div>
            <div class="coord-tag" id="pkgDialogMeta">EXPEDITION DOSSIER</div>
            <h2 id="pkgDialogTitle" class="display-title" style="font-size: clamp(2rem, 4vw, 3rem); margin-top: 0.2rem;">Package</h2>
          </div>
          <form method="dialog"><button type="submit" class="dialog-close-btn" aria-label="Close package details" value="close">✕</button></form>
        </div>
        <div class="dialog-body">
          <div class="dialog-hero-img media-frame" id="pkgDialogImgWrap"><img id="pkgDialogImg" src="${DATA.packages[0].image}" alt="${DATA.packages[0].title}" fetchpriority="low" /></div>
          <div class="dialog-split">
            <div>
              <p id="pkgDialogDesc" style="font-size: 0.98rem; color: var(--charcoal-soft);"></p>
              <h3 style="font-family: var(--font-display); font-size: 1.65rem; text-transform: uppercase; margin-top: 1.1rem;">Expedition Arc</h3>
              <ul class="itinerary-list" id="pkgDialogItinerary"></ul>
            </div>
            <div class="price-calc-box">
              <div>
                <div class="coord-tag">ESTIMATED TOTAL</div>
                <div class="display-title" style="font-size: 3rem; margin-top: 0.2rem;" id="pkgDialogTotal">$1,490</div>
                <div style="font-size: 0.82rem; color: var(--charcoal-soft);" id="pkgDialogPerPerson">Guides &amp; gear included</div>
              </div>
              <div class="traveler-stepper">
                <span style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Explorers</span>
                <div style="display: flex; align-items: center; gap: 0.7rem;">
                  <button type="button" class="stepper-btn" id="pkgDecBtn" aria-label="Decrease travelers">−</button>
                  <strong id="pkgTravelerCount" style="font-family: var(--font-mono); min-width: 1.5ch; text-align: center;">1</strong>
                  <button type="button" class="stepper-btn" id="pkgIncBtn" aria-label="Increase travelers">+</button>
                </div>
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--charcoal-soft); display: grid; gap: 0.35rem;" id="pkgDialogSpecs"></div>
              <button type="button" class="btn btn-primary" id="pkgReserveBtn" style="width: 100%;" autofocus>
                <span>Reserve This Expedition</span><span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </dialog>

      <dialog class="editorial-dialog" id="bookingDialog" closedby="any" data-lenis-prevent aria-labelledby="bookingDialogTitle">
        <div class="dialog-header">
          <div>
            <div class="coord-tag">EXPEDITION DESK // 24H RESPONSE</div>
            <h2 id="bookingDialogTitle" class="display-title" style="font-size: clamp(2rem, 4vw, 3rem); margin-top: 0.2rem;">BOOK YOUR ADVENTURE</h2>
          </div>
          <form method="dialog"><button type="submit" class="dialog-close-btn" aria-label="Close booking dialog" value="close">✕</button></form>
        </div>
        <div class="dialog-body">
          <form id="bookingForm" class="booking-grid">
            <div class="field-group is-full">
              <label for="bookTrip">Expedition or Destination</label>
              <input id="bookTrip" name="trip" class="field-input" type="text" required placeholder="e.g., Zanskar High-Pass Traverse, Ladakh" autofocus />
            </div>
            <div class="field-group">
              <label for="bookName">Full Name</label>
              <input id="bookName" name="name" class="field-input" type="text" required placeholder="Aarav Mehta" autocomplete="name" />
            </div>
            <div class="field-group">
              <label for="bookEmail">Email Address</label>
              <input id="bookEmail" name="email" class="field-input" type="email" required placeholder="you@domain.com" autocomplete="email" />
            </div>
            <div class="field-group">
              <label for="bookDate">Target Departure Month</label>
              <select id="bookDate" name="date" class="field-input">
                <option>March – April 2027</option><option>May – June 2027</option><option>July – August 2027</option><option>September – October 2027</option><option>November – December 2027</option>
              </select>
            </div>
            <div class="field-group">
              <label for="bookGroup">Group Size &amp; Experience</label>
              <select id="bookGroup" name="group" class="field-input">
                <option>Solo Explorer · Beginner Friendly</option><option>2 Explorers · Moderate</option><option>3–5 Friends · Challenging</option><option>Private Crew (6–8) · Custom Pace</option>
              </select>
            </div>
            <div class="field-group is-full">
              <label for="bookNotes">Wilderness Goals or Custom Requests</label>
              <textarea id="bookNotes" name="notes" class="field-input" rows="3" placeholder="Tell us your dream terrain, dates, or multi-sport combo..."></textarea>
            </div>
            <div class="field-group is-full" style="display: flex; flex-direction: row; justify-content: flex-end; gap: 0.75rem;">
              <button type="button" class="btn btn-outline" id="bookingCancelBtn">Cancel</button>
              <button type="submit" class="btn btn-primary"><span>Request Expedition Pass</span><span class="btn-arrow" aria-hidden="true">→</span></button>
            </div>
          </form>
          <div class="booking-receipt" id="bookingReceipt" role="status" aria-live="polite">
            <div class="coord-tag">BOARDING DISPATCH CONFIRMED · REF <span id="receiptRef">MRD-2026</span></div>
            <h3 class="display-title" style="font-size: 2.2rem;">YOUR COORDINATES ARE LOCKED IN.</h3>
            <p id="receiptSummary" style="font-size: 0.96rem; color: var(--charcoal-soft);"></p>
            <div><button type="button" class="btn btn-primary" id="receiptDoneBtn">Back to Exploring</button></div>
          </div>
        </div>
      </dialog>

      <div class="toast-banner" id="toastBanner" role="status" aria-live="polite"></div>
    `;

    document.body.insertAdjacentHTML('afterbegin', topChrome);
    document.body.insertAdjacentHTML('beforeend', bottomChrome);
  }

  function initSharedRuntime() {
    const header = document.getElementById('siteHeader');
    const progressFill = document.getElementById('scrollProgressFill');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // Scroll Header Morph & Progress Bar
    window.addEventListener('scroll', () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progressFill) progressFill.style.setProperty('--scroll-progress', Math.min(1, window.scrollY / maxScroll).toFixed(4));
      if (header && !document.body.dataset.headerTheme) {
        header.classList.toggle('is-scrolled', window.scrollY > 56);
      }
    }, { passive: true });

    // Mobile Menu
    const closeMenu = () => {
      mobileMenu?.classList.remove('is-open');
      mobileMenu?.setAttribute('aria-hidden', 'true');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      header?.classList.remove('menu-is-open');
      lenisInstance?.start();
    };
    mobileMenuBtn?.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open', open);
      mobileMenu.setAttribute('aria-hidden', String(!open));
      mobileMenuBtn.setAttribute('aria-expanded', String(open));
      header?.classList.toggle('menu-is-open', open);
      if (lenisInstance) open ? lenisInstance.stop() : lenisInstance.start();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) closeMenu();
    });

    // Shared Dialogs & Safari closedBy Fallback
    const pkgDialog = document.getElementById('packageDialog');
    const bookingDialog = document.getElementById('bookingDialog');
    [pkgDialog, bookingDialog].forEach((d) => {
      d?.addEventListener('close', () => {
        d.returnValue = '';
        lenisInstance?.start();
      });
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, d) => {
        const r = d.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      document.querySelectorAll('dialog[closedby="any"]').forEach((d) => {
        let downOut = false;
        d.addEventListener('pointerdown', (e) => { downOut = outside(e, d); });
        d.addEventListener('pointerup', (e) => { if (downOut && outside(e, d)) d.close(); });
      });
    }

    let activePkg = DATA.packages[0];
    let travelers = 1;
    const syncPkgTotal = () => {
      document.getElementById('pkgTravelerCount').textContent = String(travelers);
      document.getElementById('pkgDialogTotal').textContent = `$${(activePkg.priceNum * travelers).toLocaleString()}`;
    };

    const openPackageModal = (idx) => {
      activePkg = DATA.packages[idx];
      if (!activePkg || !pkgDialog) return;
      travelers = 1;
      document.getElementById('pkgDialogMeta').textContent = `${activePkg.destination} · ${activePkg.activity}`;
      document.getElementById('pkgDialogTitle').textContent = activePkg.title;
      document.getElementById('pkgDialogDesc').textContent = activePkg.desc;
      document.getElementById('pkgDialogPerPerson').textContent = `${activePkg.price} per explorer · Guides & technical gear included`;
      const imgWrap = document.getElementById('pkgDialogImgWrap');
      const img = document.getElementById('pkgDialogImg');
      imgWrap.classList.remove('is-loaded');
      delete img.dataset.fallbackApplied;
      img.dataset.fallbackTitle = activePkg.title.toUpperCase();
      img.dataset.fallbackBg = activePkg.tint;
      img.onload = () => imgWrap.classList.add('is-loaded');
      img.onerror = () => {
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = '1';
        img.src = buildFallbackSvg(activePkg.title.toUpperCase(), activePkg.tint);
        imgWrap.classList.add('is-loaded');
      };
      img.alt = `${activePkg.title} — ${activePkg.destination}`;
      img.src = activePkg.image;
      if (img.complete && img.naturalWidth > 0) imgWrap.classList.add('is-loaded');
      document.getElementById('pkgDialogItinerary').innerHTML = activePkg.itinerary.map((i) => `<li><strong>${i.phase}</strong>${i.detail}</li>`).join('');
      document.getElementById('pkgDialogSpecs').innerHTML = `<span>DURATION · <strong>${activePkg.duration}</strong></span><span>DIFFICULTY · <strong>${activePkg.difficulty}</strong></span><span>NEXT · <strong>${activePkg.nextDeparture}</strong></span>`;
      syncPkgTotal();
      lenisInstance?.stop();
      pkgDialog.showModal();
    };

    const bookingForm = document.getElementById('bookingForm');
    const bookingReceipt = document.getElementById('bookingReceipt');
    const openBookingModal = (trip = '') => {
      closeMenu();
      bookingForm.style.display = 'grid';
      bookingReceipt.classList.remove('is-visible');
      if (trip) document.getElementById('bookTrip').value = trip;
      lenisInstance?.stop();
      bookingDialog.showModal();
    };

    document.getElementById('pkgDecBtn')?.addEventListener('click', () => { travelers = Math.max(1, travelers - 1); syncPkgTotal(); });
    document.getElementById('pkgIncBtn')?.addEventListener('click', () => { travelers = Math.min(8, travelers + 1); syncPkgTotal(); });
    document.getElementById('pkgReserveBtn')?.addEventListener('click', () => {
      pkgDialog.close();
      openBookingModal(`${activePkg.title} (${travelers} ${travelers === 1 ? 'Explorer' : 'Explorers'})`);
    });
    document.getElementById('bookingCancelBtn')?.addEventListener('click', () => bookingDialog.close());
    document.getElementById('receiptDoneBtn')?.addEventListener('click', () => bookingDialog.close());

    bookingForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(bookingForm);
      const ref = 'MRD-' + Math.floor(100000 + Math.random() * 899999);
      document.getElementById('receiptRef').textContent = ref;
      document.getElementById('receiptSummary').textContent =
        `Thank you, ${fd.get('name')}. Our expedition lead received your request for “${fd.get('trip')}” (${fd.get('date')}, ${fd.get('group')}) and will email ${fd.get('email')} within 24 hours.`;
      bookingForm.style.display = 'none';
      bookingReceipt.classList.add('is-visible');
      showToast(`Expedition request ${ref} confirmed!`);
    });

    // Global delegated triggers
    document.addEventListener('click', (e) => {
      const p = e.target.closest('[data-open-package]');
      if (p) { openPackageModal(Number(p.dataset.openPackage)); return; }
      const b = e.target.closest('[data-open-booking]');
      if (b) { openBookingModal(b.dataset.openBooking); return; }
    });

    // Newsletter & Responsive Mobile Footer Accordions
    const nForm = document.getElementById('newsletterForm');
    nForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      const fb = document.getElementById('newsletterFeedback');
      const val = input.value.trim();
      if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        fb.textContent = 'Please enter a valid explorer email address.';
        input.focus();
        return;
      }
      fb.textContent = `Confirmed — coordinates queued for ${val}.`;
      input.value = '';
      showToast('Subscribed to Meridian Field Dispatch!');
    });

    const footerDetails = Array.from(document.querySelectorAll('.site-footer .footer-col-details'));
    const footerMobileMq = window.matchMedia('(max-width: 768px)');
    const syncFooterAccordions = (isMobile) => {
      footerDetails.forEach((details) => {
        const summary = details.querySelector(':scope > summary');
        if (isMobile) {
          details.open = false;
          summary?.removeAttribute('tabindex');
          summary?.removeAttribute('aria-disabled');
        } else {
          details.open = true;
          summary?.setAttribute('tabindex', '-1');
          summary?.setAttribute('aria-disabled', 'true');
        }
      });
    };
    footerDetails.forEach((details) => {
      const summary = details.querySelector(':scope > summary');
      summary?.addEventListener('click', (e) => {
        if (!footerMobileMq.matches) e.preventDefault();
      });
      details.addEventListener('toggle', () => {
        window.ScrollTrigger?.refresh();
        lenisInstance?.resize();
      });
    });
    syncFooterAccordions(footerMobileMq.matches);
    if (footerMobileMq.addEventListener) footerMobileMq.addEventListener('change', (e) => syncFooterAccordions(e.matches));
    else if (footerMobileMq.addListener) footerMobileMq.addListener((e) => syncFooterAccordions(e.matches));

    document.getElementById('footerBackToTop')?.addEventListener('click', () => {
      if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.1 });
      else window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    // Custom Desktop Magnetic Cursor
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion) {
      document.body.classList.add('has-custom-cursor');
      const dot = document.getElementById('cursorDot');
      const ring = document.getElementById('cursorRing');
      const label = document.getElementById('cursorLabel');
      let mx = -120, my = -120, rx = -120, ry = -120;
      window.addEventListener('pointermove', (e) => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        ring.classList.toggle('is-light', Boolean(e.target.closest('[data-cursor-theme="light"]')));
        const lbl = e.target.closest('[data-cursor-label]');
        const link = e.target.closest('a, button, summary, input, select, textarea');
        if (lbl) {
          label.textContent = lbl.dataset.cursorLabel;
          ring.classList.add('is-expanded'); ring.classList.remove('is-hover-link'); dot.classList.add('is-hidden');
        } else if (link) {
          label.textContent = '';
          ring.classList.remove('is-expanded'); ring.classList.add('is-hover-link'); dot.classList.remove('is-hidden');
        } else {
          label.textContent = '';
          ring.classList.remove('is-expanded', 'is-hover-link'); dot.classList.remove('is-hidden');
        }
      }, { passive: true });
      const loop = () => {
        rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        requestAnimationFrame(loop);
      };
      loop();
      document.querySelectorAll('.magnetic').forEach((el) => {
        el.addEventListener('pointermove', (e) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate3d(${((e.clientX - (r.left + r.width / 2)) * 0.22).toFixed(1)}px, ${((e.clientY - (r.top + r.height / 2)) * 0.22).toFixed(1)}px, 0)`;
        });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; });
      });
    }

    // GSAP ScrollTrigger & Lenis Smooth Scroll
    if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.page-hero-bg', {
        yPercent: 12, scale: 1.06, ease: 'none',
        scrollTrigger: { trigger: '.page-hero', start: 'top top', end: 'bottom top', scrub: true }
      });
      document.querySelectorAll('[data-parallax-x]').forEach((el) => {
        gsap.to(el, {
          x: Number(el.dataset.parallaxX), ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
        });
      });
      gsap.from('.reveal-card', {
        y: 30, duration: 0.72, stagger: 0.06, immediateRender: false, ease: 'power3.out',
        scrollTrigger: { trigger: '.reveal-grid', start: 'top 90%', once: true }
      });
    }

    if (window.Lenis && !prefersReducedMotion) {
      lenisInstance = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        prevent: (n) => Boolean(n && n.closest && n.closest('dialog[open], .mobile-menu.is-open, [data-lenis-prevent]'))
      });
      if (window.gsap && window.ScrollTrigger) {
        lenisInstance.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((t) => lenisInstance && lenisInstance.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (t) => { lenisInstance?.raf(t); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      }
      window.addEventListener('load', () => { lenisInstance?.resize(); window.ScrollTrigger?.refresh(); });
    }

    attachImageHandlers(document);

    window.MERIDIAN_UI = {
      attachImageHandlers,
      showToast,
      openPackageModal,
      openBookingModal,
      refreshScroll: () => { window.ScrollTrigger?.refresh(); lenisInstance?.resize(); }
    };
  }

  function bootShell() {
    injectSharedChrome();
    initSharedRuntime();
    document.dispatchEvent(new CustomEvent('meridian:ready'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootShell);
  else bootShell();
})();
