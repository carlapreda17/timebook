const activities = [
  {
    date: '2013-08-06',
    duration: 120,
    project: 'Project Breeze',
    description:
      'Chess is a board game played between two players. It is sometimes called Western chess or international chess to distinguish it from related games such as xiangqi and shogi.',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2013-08-06'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2013-08-22'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2013-12-22',
    duration: 60,
    project: 'Command Program',
    description:
      'Board games are tabletop games that typically use pieces - moved or placed on a pre-marked board (playing surface) and often include elements of table, card, role-playing, and miniatures games as well.',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2013-12-22'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2014-12-22'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2014-06-18',
    duration: 15,
    project: 'Project Point',
    description:
      'Tabletop games or tabletops are games that are normally played on a table or other flat surface, such as board games, card games, dice games, miniature wargames, or tile-based games.[1][2] ',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2014-06-18'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2014-06-26'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2015-03-14',
    duration: 30,
    project: 'Project Mecha',
    description:
      'A card game is any game using playing cards as the primary device with which the game is played, be they traditional or game-specific. ',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2015-03-14'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2015-03-14'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2015-08-11',
    duration: 45,
    project: 'Timebook',
    description:
      'A game is a structured form of play, usually undertaken for entertainment or fun, and sometimes used as an educational tool.[1] Games are different from work, which is usually carried out for remuneration, and from art, which is more often an expression of aesthetic or ideological elements. However, the distinction is not clear-cut, and many games are also considered to be work (such as professional players of spectator sports or games) or art (such as jigsaw puzzles or games involving an artistic layout such as Mahjong, solitaire, or some video games). ',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2015-08-11'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2015-10-06'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2015-08-25',
    duration: 60,
    project: 'Timebook',
    description:
      'Play is a range of intrinsically motivated activities done for recreational pleasure and enjoyment.[1] Play is commonly associated with children and juvenile-level activities, but play occurs at any life stage, and among other higher-functioning animals as well, most notably mammals and birds. ',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2015-08-25'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2015-09-06'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2016-03-01',
    duration: 90,
    project: 'Dynamic Program',
    description:
      "Motivation is the reason for which humans and other animals initiate, continue, or terminate a behavior at a given time. Motivational states are commonly understood as forces acting within the agent that create a disposition to engage in goal-directed behavior. It is often held that different mental states compete with each other and that only the strongest state determines behavior.[1] This means that we can be motivated to do something without actually doing it. The paradigmatic mental state providing motivation is desire. But various other states, such as beliefs about what one ought to do or intentions, may also provide motivation. Motivation is derived from the word 'motive,' which denotes a person's needs, desires, wants, or urges. It is the process of motivating individuals to take action in order to achieve a goal. The psychological elements fueling people's behavior in the context of job goals might include a desire for money. ",
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2016-03-01'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2016-03-01'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2016-05-07',
    duration: 240,
    project: 'Project Zen',
    description:
      'A mental state, or a mental property, is a state of mind of a person. Mental states comprise a diverse class including perception, pain experience, belief, desire, intention, emotion, and memory.',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2016-05-07'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2016-05-07'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2016-09-12',
    duration: 120,
    project: 'Project Illuminate',
    description:
      "The mind is the set of faculties responsible for mental phenomena. Often the term is also identified with the phenomena themselves.[2][3][4] These faculties include thought, imagination, memory, will, and sensation. They are responsible for various mental phenomena, like perception, pain experience, belief, desire, intention, and emotion. Various overlapping classifications of mental phenomena have been proposed. Important distinctions group them together according to whether they are sensory, propositional, intentional, conscious, or occurrent. Minds were traditionally understood as substances but it is more common in the contemporary perspective to conceive them as properties or capacities possessed by humans and higher animals. Various competing definitions of the exact nature of the mind or mentality have been proposed. Epistemic definitions focus on the privileged epistemic access the subject has to these states. Consciousness-based approaches give primacy to the conscious mind and allow unconscious mental phenomena as part of the mind only to the extent that they stand in the right relation to the conscious mind. According to intentionality-based approaches, the power to refer to objects and to represent the world is the mark of the mental. For behaviorism, whether an entity has a mind only depends on how it behaves in response to external stimuli while functionalism defines mental states in terms of the causal roles they play. Central questions for the study of mind, like whether other entities besides humans have minds or how the relation between body and mind is to be conceived, are strongly influenced by the choice of one's definition. ",
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2016-09-12'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2018-08-06'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2017-02-26',
    duration: 15,
    project: 'Timebook',
    description:
      'An object of the mind is an object that exists in the imagination, but which, in the real world, can only be represented or modeled. Some such objects are abstractions, literary concepts, or fictional scenarios. ',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2017-02-26'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2017-05-16'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2017-05-24',
    duration: 10,
    project: 'Project Systems',
    description:
      "Philosophy (from Greek: φιλοσοφία, philosophia, 'love of wisdom')[1][2] is the systematized study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language.[3][4][5] Such questions are often posed as problems",
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2017-05-24'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2017-06-06'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2017-12-24',
    duration: 40,
    project: 'Native Program',
    description:
      'Greek (Modern Greek: Ελληνικά, romanized: Elliniká; Ancient Greek: Ἑλληνική, romanized: Hellēnikḗ) is an independent branch of the Indo-European family of languages, native to Greece, Cyprus, southern Albania, and other regions of the Balkans, the Black Sea coast, Asia Minor, and the Eastern Mediterranean.',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2017-12-24'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2018-02-04'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2018-04-20',
    duration: 60,
    project: 'Project Force',
    description:
      'Greek (Modern Greek: Ελληνικά, romanized: Elliniká; Ancient Greek: Ἑλληνική, romanized: Hellēnikḗ) is an independent branch of the Indo-European family of languages, native to Greece, Cyprus, southern Albania, and other regions of the Balkans, the Black Sea coast, Asia Minor, and the Eastern Mediterranean.',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2018-04-20'),
    },
    edited: {
      edited_by: 'Bogdan Posedaru',
      edited_at: new Date('2018-08-06'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2018-08-29',
    duration: 80,
    project: 'Quest Program',
    description:
      "One usage refers to a variety of a language that is a characteristic of a particular group of the language's speakers.[1] Under this definition, the dialects or varieties of a particular language are closely related and",
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2018-08-29'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2018-11-21'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2019-09-10',
    duration: 75,
    project: 'Project Signal',
    description:
      'is a classical language belonging to the Italic branch of the Indo-European languages. Latin was originally a dialect spoken in the lower Tiber area (then known as Latium) around present-day Rome,[2] but through the power of th',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2019-09-10'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2019-09-10'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2019-10-14',
    duration: 480,
    project: 'Timebook',
    description:
      'A classical language is any language with an independent literary tradition and a large and ancient body of written literature.[1] Classical languages are typically dead languages, or show a high degree of diglossia, as the spoken varieties of the language diverge further away from the classical written language over time.',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2019-10-14'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2020-03-12'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2020-09-05',
    duration: 360,
    project: 'Module Program',
    description:
      'A language is a structured system of communication. The structure of a language is its grammar and the free components are its vocabulary.',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2020-09-05'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2020-09-06'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2020-12-23',
    duration: 120,
    project: 'Project Chroma',
    description:
      'Communication (from Latin: communicare, meaning "to share" or "to be in relation with")[1][2][3] is "an apparent answer to the painful divisions between self and other, private and public, and inner thought and outer world."[4] As this definition indicates, communication is difficult to define in a consistent manne',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2020-12-23'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2021-02-02'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2021-06-10',
    duration: 30,
    project: 'Momentum Program',
    description:
      'An academic discipline or academic field is a subdivision of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part) and recognized by the academic journals in which research is published, and the learned societies',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2021-06-10'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2021-06-10'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2022-06-17',
    duration: 60,
    project: 'Strategic Program',
    description:
      'Knowledge is a familiarity or awareness, of someone or something, such as facts (descriptive knowledge), skills (procedural knowledge), or objects (acquaintance knowledge), often contributing to understanding. Knowledge of facts, also referred to as propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification.',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2022-06-17'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2022-08-06'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2012-03-20',
    duration: 90,
    project: 'Timebook',
    description:
      'A fact is something that is true. The usual test for a statement of fact is verifiability, that is whether it can be demonstrated to correspond to experience. Standard reference works are often used to check facts. Scientific facts are verified by repeatable careful observation or measurement by experiments or other means. ',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2012-03-20'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2013-08-06'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2012-07-10',
    duration: 120,
    project: 'MicroRaptor',
    description:
      'Truth is the property of being in accord with fact or reality.[1] In everyday language, truth is typically ascribed to things that aim to represent reality or otherwise correspond to it, such as beliefs, propositions, and declarative sentences.[2] ',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2012-07-10'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2013-02-25'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2012-08-28',
    duration: 80,
    project: 'Tarius',
    description:
      'Reality is the sum or aggregate of all that is real or existent within a system, as opposed to that which is only imaginary. The term is also used to refer to the ontological status of things, indicating their existence',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2012-08-28'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2012-12-03'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2013-08-03',
    duration: 240,
    project: 'Rugops',
    description: 'Added Logbook page.',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2013-08-03'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2013-08-30'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2015-03-26',
    duration: 60,
    project: 'Erketu',
    description:
      'An object is a philosophical term often used in contrast to the term subject. A subject is an observer and an object is a thing observed. For modern philosophers like Descartes, consciousness is a state of cognition that includes the subject—which can never be doubted as only it can be the one who doubts—and some object(s) that may be considered as not having real or full existence or value independent of the subject who observes it. Metaphysical frameworks also differ in whether they consider objects existing independently of their properties and, if so, in what way.',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2015-03-26'),
    },
    edited: {
      edited_by: 'Tiberiu Georgescu',
      edited_at: new Date('2016-05-11'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2015-11-03',
    duration: 45,
    project: 'Capricorn',
    description:
      'A subject is a being who has a unique consciousness and/or unique personal experiences, or an entity that has a relationship with another entity that exists outside itself (called an "object"). ',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2015-11-03'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2015-12-18'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2016-02-16',
    duration: 90,
    project: 'Sagittarius',
    description:
      'Consciousness, at its simplest, is sentience or awareness of internal and external existence.[1] Despite millennia of analyses, definitions, explanations and debates by philosophers and scientists, consciousness remains puzzling and controversial,[2] being "at once the most familiar and [also the] most mysterious aspect of our lives"',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2016-02-16'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2016-04-01'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2016-02-28',
    duration: 105,
    project: 'Gemini',
    description:
      'Sentience is the capacity to experience feelings and sensations.[1] The word was first coined by philosophers in the 1630s for the concept of an ability to feel, derive',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2016-02-28'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2016-03-22'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2016-06-24',
    duration: 75,
    project: 'Pisces',
    description:
      'In normal language usage, the noun "feeling" is often used as being the same as emotion. However, in psychology, and in this article, feeling is used as a technical term which means a generalized bodily consciousness of a physiological sensation. It can be termed as a perception of physiological events within the body. Importantly, feeling is also termed as a self-contained physiological experienc',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2016-06-24'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2017-01-21'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2016-08-31',
    duration: 30,
    project: 'Taurus',
    description:
      'Emotions are mental states brought on by neurophysiological changes, variously associated with thoughts, feelings, behavioural response',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2016-08-31'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2016-08-31'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2016-10-05',
    duration: 120,
    project: 'Osiris',
    description:
      'Neurophysiology is a branch of the physiology and neuroscience that studies the measurement and evaluation of nervous system function rather than nervous system architecture',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2016-10-05'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2016-12-06'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2017-02-24',
    duration: 60,
    project: 'Timebook',
    description:
      'Neuroscience is the scientific study of the nervous system (the brain, spinal cord, and peripheral nervous system) and its functions',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2017-02-24'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2017-04-28'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2018-10-16',
    duration: 90,
    project: 'Hathor',
    description:
      'Interdisciplinarity or interdisciplinary studies involves the combination of two or more academic disciplines into one activity (e.g., a research project).[1] It draws knowledge from several other fields like sociology, anthropology, psychology, economics, etc. ',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2018-10-16'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2019-01-29'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2019-04-22',
    duration: 45,
    project: 'Anubis',
    description:
      'Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.[',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2019-04-22'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2019-08-15'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2020-05-03',
    duration: 100,
    project: 'Timebook',
    description:
      'Engineering is the discipline and profession that applies scientific theories, mathematical methods, and empirical evidence to design, create, and analyze technological solutions cognizant of safety, human factors, physical laws, regulations, practicality, and cost. In the contemporary era, engineering is generally considered to consist of the major primary branches of',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2020-05-03'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2020-06-07'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2021-06-17',
    duration: 12,
    project: 'Timebook',
    description:
      'Chemical engineering is an engineering field which deals with the study of operation and design of chemical plants as well as methods of improving production. ',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2021-06-17'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2021-08-06'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2021-08-25',
    duration: 5,
    project: 'Titus',
    description:
      'Chemistry is the scientific study of the properties and behavior of matter.[1] It is a natural science that covers the elements that make up matter to the compounds composed of atoms',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2021-08-25'),
    },
    edited: {
      edited_by: 'Victor Ocna',
      edited_at: new Date('2021-08-25'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2021-11-15',
    duration: 56,
    project: 'Ophelia',
    description:
      'An atom is the smallest unit of ordinary matter that forms a chemical element.[1] Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across. They are so small that accurately predicting their behavior using classical physics, as if they were tennis balls for example, is not possible due to quantum effects. ',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2021-11-15'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2021-11-15'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2022-01-13',
    duration: 23,
    project: 'Juliet',
    description:
      'The atomic nucleus is the small, dense region consisting of protons and neutrons at the center of an atom, discovered in 1911 by Ernest Rutherford based on the 1909',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2022-01-13'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2022-05-23'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2022-12-03',
    duration: 15,
    project: 'Timebook',
    description:
      'A chemical element is a species of atoms that have a given number of protons in their nuclei, including the pure',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2022-12-03'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2022-12-06'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2012-06-21',
    duration: 56,
    project: 'Apple',
    description:
      'A chemical compound is a chemical substance composed of many identical molecules (or molecular entities) composed of atoms from more than one element held together',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2012-06-21'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2012-07-18'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2012-12-20',
    duration: 96,
    project: 'Tesla',
    description:
      'A chemical bond is a lasting attraction between atoms, ions or molecules that enables the formation of chemical compounds. The bond may result from the electrostatic force between oppositely charged ions as in ionic bonds or through the shari',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2012-12-20'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2013-02-05'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2013-03-06',
    duration: 120,
    project: 'Netflix',
    description:
      'Metallic bonding is a type of chemical bonding that arises from the electrostatic attractive force between conduction electrons (in the for',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2013-03-06'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2013-08-06'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2015-04-18',
    duration: 50,
    project: 'Amazon',
    description:
      'n crystallography, crystal structure is a description of the ordered arrangement of atoms, ions or molecules in a crystalline material.[1] Ordered structures occur fro',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2015-04-18'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2015-04-18'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2015-06-25',
    duration: 45,
    project: 'Google',
    description:
      'n crystallography, crystal structure is a description of the ordered arrangement of atoms, ions or molecules in a crystalline material.[1] Ordered structures occur fro',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2015-06-25'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2015-08-22'),
    },
    validated: true,
    billed: true,
  },
  {
    date: '2016-07-18',
    duration: 60,
    project: 'Microsoft',
    description:
      'Wave propagation is any of the ways in which waves travel. Single wave propagation can be calculated by 2nd order wave equation (standing wavefield) or 1st order one-way wave equation. ',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2016-07-18'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2016-08-01'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2017-01-09',
    duration: 267,
    project: 'Ferrari',
    description:
      'Oscillation is the repetitive or periodic variation, typically in time, of some measure about a central value (often a point of equilibrium) or between two or more',
    created: {
      created_by: 'Victor Ocna',
      created_at: new Date('2017-01-09'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2017-03-24'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2017-04-21',
    duration: 124,
    project: 'Ford',
    description:
      'In classical mechanics, a particle is in mechanical equilibrium if the net force on that particle is zero.[1]: 39  By extension, a physical system ma',
    created: {
      created_by: 'Bogdan Posedaru',
      created_at: new Date('2017-04-21'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2017-09-25'),
    },
    validated: false,
    billed: false,
  },
  {
    date: '2018-01-31',
    duration: 24,
    project: 'Mercedes',
    description:
      'It is possible to determine the torque associated with the point of application of a net force so that it ',
    created: {
      created_by: 'Leo Ionescu',
      created_at: new Date('2018-01-31'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2018-02-26'),
    },
    validated: true,
    billed: false,
  },
  {
    date: '2018-04-15',
    duration: 640,
    project: 'Volkswagen',
    description:
      'In classical physics and general chemistry, matter is any substance that has mass and',
    created: {
      created_by: 'Tiberiu Georgescu',
      created_at: new Date('2018-04-15'),
    },
    edited: {
      edited_by: 'Leo Ionescu',
      edited_at: new Date('2019-05-23'),
    },
    validated: false,
    billed: false,
  },
];

export default activities;
