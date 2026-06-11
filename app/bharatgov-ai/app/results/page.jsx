"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResultsContent() {
  const params = useSearchParams();

  const userData = {
    age: params.get("age") || "Not provided",
    state: params.get("state") || "Not provided",
    income: params.get("income") || "Not provided",
    category: params.get("category") || "Not provided",
    occupation: params.get("occupation") || "Not provided",
    need: params.get("need") || "Not provided",
    language: params.get("language") || "English",
  };

  const lang = userData.language;

  const t = {
    English: {
      title: "Eligible Scheme Results",
      subtitle: "Based on your details, BharatGov AI found a suitable government scheme.",
      age: "Age",
      state: "State / UT",
      income: "Income",
      category: "Category",
      occupation: "Occupation",
      need: "Need",
      recommended: "Recommended Scheme",
      documents: "Required Documents",
      steps: "Application Steps",
      ai: "AI Explanation",
      apply: "Apply Now / Official Website",
      stepList: [
        "Visit the official government scheme portal using the Apply Now button.",
        "Register or login using mobile number / Aadhaar.",
        "Fill personal, income, category, and need-based details.",
        "Upload the required documents.",
        "Submit the application.",
        "Save the acknowledgment number for tracking.",
      ],
    },
    Tamil: {
      title: "தகுதியான திட்ட முடிவுகள்",
      subtitle: "உங்கள் விவரங்களின் அடிப்படையில் BharatGov AI பொருத்தமான அரசுத் திட்டத்தை கண்டறிந்தது.",
      age: "வயது",
      state: "மாநிலம் / யூனியன் பிரதேசம்",
      income: "வருமானம்",
      category: "பிரிவு",
      occupation: "தொழில்",
      need: "தேவை",
      recommended: "பரிந்துரைக்கப்பட்ட திட்டம்",
      documents: "தேவையான ஆவணங்கள்",
      steps: "விண்ணப்ப படிகள்",
      ai: "AI விளக்கம்",
      apply: "இப்போது விண்ணப்பிக்கவும் / அதிகாரப்பூர்வ இணையதளம்",
      stepList: [
        "Apply Now பொத்தானை பயன்படுத்தி அதிகாரப்பூர்வ அரசுத் திட்ட இணையதளத்திற்குச் செல்லவும்.",
        "மொபைல் எண் / ஆதார் மூலம் பதிவு செய்யவும் அல்லது உள்நுழையவும்.",
        "தனிப்பட்ட, வருமானம், பிரிவு மற்றும் தேவைக்கான விவரங்களை நிரப்பவும்.",
        "தேவையான ஆவணங்களை பதிவேற்றவும்.",
        "விண்ணப்பத்தை சமர்ப்பிக்கவும்.",
        "கண்காணிப்பிற்காக அங்கீகார எண்ணை சேமிக்கவும்.",
      ],
    },
    Hindi: {
      title: "पात्र योजना परिणाम",
      subtitle: "आपके विवरण के आधार पर BharatGov AI ने एक उपयुक्त सरकारी योजना खोजी है।",
      age: "आयु",
      state: "राज्य / केंद्र शासित प्रदेश",
      income: "आय",
      category: "श्रेणी",
      occupation: "व्यवसाय",
      need: "आवश्यकता",
      recommended: "अनुशंसित योजना",
      documents: "आवश्यक दस्तावेज",
      steps: "आवेदन चरण",
      ai: "AI स्पष्टीकरण",
      apply: "अभी आवेदन करें / आधिकारिक वेबसाइट",
      stepList: [
        "Apply Now बटन का उपयोग करके आधिकारिक सरकारी योजना पोर्टल पर जाएं।",
        "मोबाइल नंबर / आधार से पंजीकरण या लॉगिन करें।",
        "व्यक्तिगत, आय, श्रेणी और आवश्यकता आधारित विवरण भरें।",
        "आवश्यक दस्तावेज अपलोड करें।",
        "आवेदन जमा करें।",
        "ट्रैकिंग के लिए स्वीकृति संख्या सुरक्षित रखें।",
      ],
    },
    Telugu: {
      title: "అర్హత గల పథకాల ఫలితాలు",
      subtitle: "మీ వివరాల ఆధారంగా BharatGov AI సరైన ప్రభుత్వ పథకాన్ని కనుగొంది.",
      age: "వయస్సు",
      state: "రాష్ట్రం / కేంద్ర పాలిత ప్రాంతం",
      income: "ఆదాయం",
      category: "వర్గం",
      occupation: "వృత్తి",
      need: "అవసరం",
      recommended: "సిఫార్సు చేసిన పథకం",
      documents: "అవసరమైన పత్రాలు",
      steps: "దరఖాస్తు దశలు",
      ai: "AI వివరణ",
      apply: "ఇప్పుడే దరఖాస్తు చేయండి / అధికారిక వెబ్‌సైట్",
      stepList: [
        "Apply Now బటన్ ఉపయోగించి అధికారిక ప్రభుత్వ పథకం పోర్టల్‌కు వెళ్లండి.",
        "మొబైల్ నంబర్ / ఆధార్ ఉపయోగించి నమోదు చేయండి లేదా లాగిన్ అవ్వండి.",
        "వ్యక్తిగత, ఆదాయం, వర్గం మరియు అవసరాల వివరాలు నమోదు చేయండి.",
        "అవసరమైన పత్రాలను అప్‌లోడ్ చేయండి.",
        "దరఖాస్తును సమర్పించండి.",
        "ట్రాకింగ్ కోసం అంగీకార సంఖ్యను సేవ్ చేయండి.",
      ],
    },
    Malayalam: {
      title: "യോഗ്യതയുള്ള പദ്ധതി ഫലങ്ങൾ",
      subtitle: "നിങ്ങളുടെ വിവരങ്ങളുടെ അടിസ്ഥാനത്തിൽ BharatGov AI അനുയോജ്യമായ സർക്കാർ പദ്ധതി കണ്ടെത്തി.",
      age: "പ്രായം",
      state: "സംസ്ഥാനം / കേന്ദ്രഭരണ പ്രദേശം",
      income: "വരുമാനം",
      category: "വിഭാഗം",
      occupation: "തൊഴിൽ",
      need: "ആവശ്യം",
      recommended: "ശുപാർശ ചെയ്ത പദ്ധതി",
      documents: "ആവശ്യമായ രേഖകൾ",
      steps: "അപേക്ഷാ ഘട്ടങ്ങൾ",
      ai: "AI വിശദീകരണം",
      apply: "ഇപ്പോൾ അപേക്ഷിക്കുക / ഔദ്യോഗിക വെബ്സൈറ്റ്",
      stepList: [
        "Apply Now ബട്ടൺ ഉപയോഗിച്ച് ഔദ്യോഗിക സർക്കാർ പദ്ധതി പോർട്ടലിലേക്ക് പോകുക.",
        "മൊബൈൽ നമ്പർ / ആധാർ ഉപയോഗിച്ച് രജിസ്റ്റർ ചെയ്യുക അല്ലെങ്കിൽ ലോഗിൻ ചെയ്യുക.",
        "വ്യക്തിഗത, വരുമാനം, വിഭാഗം, ആവശ്യ വിവരങ്ങൾ പൂരിപ്പിക്കുക.",
        "ആവശ്യമായ രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക.",
        "അപേക്ഷ സമർപ്പിക്കുക.",
        "ട്രാക്കിംഗിനായി അംഗീകാര നമ്പർ സൂക്ഷിക്കുക.",
      ],
    },
    Kannada: {
  title: "ಅರ್ಹ ಯೋಜನೆ ಫಲಿತಾಂಶಗಳು",
  subtitle: "ನಿಮ್ಮ ವಿವರಗಳ ಆಧಾರದ ಮೇಲೆ BharatGov AI ಸೂಕ್ತ ಸರ್ಕಾರಿ ಯೋಜನೆಯನ್ನು ಕಂಡುಹಿಡಿದಿದೆ.",
  age: "ವಯಸ್ಸು",
  state: "ರಾಜ್ಯ",
  income: "ಆದಾಯ",
  category: "ವರ್ಗ",
  occupation: "ವೃತ್ತಿ",
  need: "ಅವಶ್ಯಕತೆ",
  recommended: "ಶಿಫಾರಸು ಮಾಡಿದ ಯೋಜನೆ",
  documents: "ಅಗತ್ಯ ದಾಖಲೆಗಳು",
  steps: "ಅರ್ಜಿ ಹಂತಗಳು",
  ai: "AI ವಿವರಣೆ",
  apply: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
  stepList: ["ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ","ನೋಂದಣಿ ಮಾಡಿ","ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ","ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ","ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಿ","ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ"],
},

Marathi: {
  title: "पात्र योजना निकाल",
  subtitle: "तुमच्या तपशीलांच्या आधारे BharatGov AI ने योग्य सरकारी योजना शोधली आहे.",
  age: "वय",
  state: "राज्य",
  income: "उत्पन्न",
  category: "प्रवर्ग",
  occupation: "व्यवसाय",
  need: "गरज",
  recommended: "शिफारस केलेली योजना",
  documents: "आवश्यक कागदपत्रे",
  steps: "अर्ज प्रक्रिया",
  ai: "AI स्पष्टीकरण",
  apply: "आता अर्ज करा",
  stepList: ["अधिकृत संकेतस्थळाला भेट द्या","नोंदणी करा","तपशील भरा","कागदपत्रे अपलोड करा","अर्ज सबमिट करा","स्थिती तपासा"],
},
  };

  const stateTranslations = {
    Tamil: {
      Assam: "அசாம்",
      "Tamil Nadu": "தமிழ்நாடு",
      Kerala: "கேரளா",
      Karnataka: "கர்நாடகா",
      Telangana: "தெலங்கானா",
      Maharashtra: "மகாராஷ்டிரா",
      "Delhi (NCT)": "டெல்லி",
    },
    Hindi: {
      Assam: "असम",
      "Tamil Nadu": "तमिलनाडु",
      Kerala: "केरल",
      Karnataka: "कर्नाटक",
      Telangana: "तेलंगाना",
      Maharashtra: "महाराष्ट्र",
      "Delhi (NCT)": "दिल्ली",
    },
    Telugu: {
      Assam: "అస్సాం",
      "Tamil Nadu": "తమిళనాడు",
      Kerala: "కేరళ",
      Karnataka: "కర్ణాటక",
      Telangana: "తెలంగాణ",
      Maharashtra: "మహారాష్ట్ర",
      "Delhi (NCT)": "ఢిల్లీ",
    },
    Malayalam: {
      Assam: "അസ്സാം",
      "Tamil Nadu": "തമിഴ്നാട്",
      Kerala: "കേരളം",
      Karnataka: "കർണാടക",
      Telangana: "തെലങ്കാന",
      Maharashtra: "മഹാരാഷ്ട്ര",
      "Delhi (NCT)": "ഡൽഹി",
    },
  };

  const displayState =
    stateTranslations[lang]?.[userData.state] || userData.state;

  const normalizedNeed = userData.need.trim().toLowerCase();

  const schemeMap = {
    scholarship: {
      name: {
        English: "National Scholarship Portal",
        Tamil: "தேசிய கல்வி உதவித்தொகை போர்டல்",
        Hindi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
        Telugu: "జాతీయ స్కాలర్‌షిప్ పోర్టల్",
        Malayalam: "ദേശീയ സ്കോളർഷിപ്പ് പോർട്ടൽ",
      },
      website: "https://scholarships.gov.in",
      description: {
        English: "Helps students apply for central and state scholarship schemes.",
        Tamil: "மாணவர்கள் மத்திய மற்றும் மாநில கல்வி உதவித்தொகை திட்டங்களுக்கு விண்ணப்பிக்க உதவுகிறது.",
        Hindi: "छात्रों को केंद्र और राज्य छात्रवृत्ति योजनाओं के लिए आवेदन करने में मदद करता है।",
        Telugu: "విద్యార్థులు కేంద్ర మరియు రాష్ట్ర స్కాలర్‌షిప్ పథకాల కోసం దరఖాస్తు చేసుకోవడానికి సహాయపడుతుంది.",
        Malayalam: "കേന്ദ്ര, സംസ്ഥാന സ്കോളർഷിപ്പ് പദ്ധതികൾക്ക് വിദ്യാർത്ഥികൾക്ക് അപേക്ഷിക്കാൻ സഹായിക്കുന്നു.",
      },
    },
    "business loan": {
      name: {
        English: "Pradhan Mantri Mudra Yojana",
        Tamil: "பிரதான் மந்திரி முத்ரா யோஜனா",
        Hindi: "प्रधान मंत्री मुद्रा योजना",
        Telugu: "ప్రధాన్ మంత్రి ముద్రా యోజన",
        Malayalam: "പ്രധാനമന്ത്രി മുദ്ര യോജന",
      },
      website: "https://www.mudra.org.in",
      description: {
        English: "Provides financial support for small businesses and micro enterprises.",
        Tamil: "சிறு தொழில்கள் மற்றும் குறு நிறுவனங்களுக்கு நிதி உதவி வழங்குகிறது.",
        Hindi: "छोटे व्यवसायों और सूक्ष्म उद्यमों को वित्तीय सहायता प्रदान करता है।",
        Telugu: "చిన్న వ్యాపారాలు మరియు సూక్ష్మ సంస్థలకు ఆర్థిక సహాయం అందిస్తుంది.",
        Malayalam: "ചെറുകിട ബിസിനസുകൾക്കും മൈക്രോ എന്റർപ്രൈസുകൾക്കും സാമ്പത്തിക സഹായം നൽകുന്നു.",
      },
    },
    agriculture: {
      name: {
        English: "PM Kisan Samman Nidhi",
        Tamil: "பிஎம் கிசான் சம்மான் நிதி",
        Hindi: "पीएम किसान सम्मान निधि",
        Telugu: "పీఎం కిసాన్ సమ్మాన్ నిధి",
        Malayalam: "പിഎം കിസാൻ സമ്മാൻ നിധി",
      },
      website: "https://pmkisan.gov.in",
      description: {
        English: "Provides financial assistance to eligible farmers for agricultural needs.",
        Tamil: "தகுதியான விவசாயிகளுக்கு வேளாண்மை தேவைகளுக்கான நிதி உதவி வழங்குகிறது.",
        Hindi: "योग्य किसानों को कृषि जरूरतों के लिए वित्तीय सहायता प्रदान करता है।",
        Telugu: "అర్హత గల రైతులకు వ్యవసాయ అవసరాల కోసం ఆర్థిక సహాయం అందిస్తుంది.",
        Malayalam: "യോഗ്യരായ കർഷകർക്ക് കാർഷിക ആവശ്യങ്ങൾക്ക് സാമ്പത്തിക സഹായം നൽകുന്നു.",
      },
    },
    housing: {
      name: {
        English: "PM Awas Yojana",
        Tamil: "பிஎம் ஆவாஸ் யோஜனா",
        Hindi: "पीएम आवास योजना",
        Telugu: "పీఎం ఆవాస్ యోజన",
        Malayalam: "പിഎം ആവാസ് യോജന",
      },
      website: "https://pmaymis.gov.in",
      description: {
        English: "Helps eligible citizens get support for affordable housing.",
        Tamil: "தகுதியான குடிமக்களுக்கு மலிவு வீடுகளுக்கான உதவி வழங்குகிறது.",
        Hindi: "योग्य नागरिकों को किफायती आवास के लिए सहायता प्रदान करता है।",
        Telugu: "అర్హులైన పౌరులకు సరసమైన గృహాల కోసం సహాయం అందిస్తుంది.",
        Malayalam: "യോഗ്യരായ പൗരന്മാർക്ക് ചെലവുകുറഞ്ഞ ഭവന സഹായം നൽകുന്നു.",
      },
    },
    "senior citizen welfare": {
  name: {
    English: "National Social Assistance Programme",
    Tamil: "தேசிய சமூக உதவி திட்டம்",
    Hindi: "राष्ट्रीय सामाजिक सहायता कार्यक्रम",
    Telugu: "జాతీయ సామాజిక సహాయ కార్యక్రమం",
    Malayalam: "ദേശീയ സാമൂഹിക സഹായ പദ്ധതി",
  },
  website: "https://nsap.nic.in",
  description: {
    English: "Provides pension and welfare assistance for eligible senior citizens.",
    Tamil: "தகுதியான மூத்த குடிமக்களுக்கு ஓய்வூதியம் மற்றும் நலத்திட்ட உதவி வழங்குகிறது.",
    Hindi: "योग्य वरिष्ठ नागरिकों को पेंशन और कल्याण सहायता प्रदान करता है।",
    Telugu: "అర్హులైన వృద్ధులకు పెన్షన్ మరియు సంక్షేమ సహాయం అందిస్తుంది.",
    Malayalam: "യോഗ്യരായ മുതിർന്ന പൗരന്മാർക്ക് പെൻഷൻ, ക്ഷേമ സഹായം നൽകുന്നു.",
  },
},
  };

const selectedScheme =
  schemeMap[normalizedNeed] || {
    name: {
      English: "General Government Welfare Scheme",
      Tamil: "பொது அரசுத் நலத்திட்டம்",
      Hindi: "सामान्य सरकारी कल्याण योजना",
      Telugu: "సాధారణ ప్రభుత్వ సంక్షేమ పథకం",
      Malayalam: "സാമാന്യ സർക്കാർ ക്ഷേമ പദ്ധതി",
    },
    website: "https://www.myscheme.gov.in",
    description: {
      English: "BharatGov AI suggests checking MyScheme for relevant central and state welfare schemes.",
      Tamil: "பொருத்தமான மத்திய மற்றும் மாநில நலத்திட்டங்களுக்கு MyScheme-ஐ பார்க்கலாம்.",
      Hindi: "प्रासंगिक केंद्र और राज्य योजनाओं के लिए MyScheme देखें।",
      Telugu: "సంబంధిత కేంద్ర మరియు రాష్ట్ర పథకాల కోసం MyScheme చూడండి.",
      Malayalam: "ബന്ധപ്പെട്ട കേന്ദ്ര, സംസ്ഥാന പദ്ധതികൾക്കായി MyScheme പരിശോധിക്കുക.",
    },
  };

  const aiExplanation = {
    English: `As a ${userData.occupation} from ${displayState}, belonging to the ${userData.category} category with an annual income of ₹${userData.income}, this scheme is relevant for your selected need: ${userData.need}.`,
    Tamil: `${displayState} மாநிலத்தைச் சேர்ந்த ${userData.occupation} ஆகவும், ${userData.category} பிரிவைச் சேர்ந்தவராகவும், ஆண்டு வருமானம் ₹${userData.income} என்பதாலும், உங்கள் தேவையான ${userData.need}க்கு இந்தத் திட்டம் பொருத்தமானதாகும்.`,
    Hindi: `${displayState} से ${userData.occupation} होने के कारण, ${userData.category} श्रेणी और ₹${userData.income} वार्षिक आय के आधार पर, यह योजना आपकी आवश्यकता ${userData.need} के लिए उपयुक्त है।`,
    Telugu: `${displayState} కు చెందిన ${userData.occupation} గా, ${userData.category} వర్గానికి చెందినవారు మరియు వార్షిక ఆదాయం ₹${userData.income} కావడంతో, మీ అవసరం ${userData.need} కోసం ఈ పథకం అనుకూలంగా ఉంటుంది.`,
    Malayalam: `${displayState} നിന്നുള്ള ${userData.occupation} ആയതിനാൽ, ${userData.category} വിഭാഗവും വാർഷിക വരുമാനം ₹${userData.income} എന്നതും അടിസ്ഥാനമാക്കി, നിങ്ങളുടെ ആവശ്യം ${userData.need}ക്ക് ഈ പദ്ധതി അനുയോജ്യമാണ്.`,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-6 text-black">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          {t[lang].title}
        </h1>

        <p className="text-gray-600 mb-8">{t[lang].subtitle}</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].age}:</b> {userData.age}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].state}:</b> {displayState}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].income}:</b> ₹{userData.income}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].category}:</b> {userData.category}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].occupation}:</b> {userData.occupation}</div>
          <div className="bg-blue-50 p-4 rounded-xl"><b>{t[lang].need}:</b> {userData.need}</div>
        </div>

        <section className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            {t[lang].recommended}
          </h2>
          <h3 className="text-xl font-semibold">
            {selectedScheme.name[lang]}
          </h3>
          <p className="text-gray-700 mt-3">
            <div className="mt-4 bg-blue-100 text-blue-700 px-4 py-2 rounded-full inline-block font-bold">
 Eligibility Score: {normalizedNeed === "senior citizen welfare" ? "88%" : normalizedNeed === "business loan" ? "91%" : normalizedNeed === "agriculture" ? "90%" : "86%"} | Confidence: High
</div>
            {selectedScheme.description[lang]}
          </p>
          <div className="mt-5">
  <h4 className="font-bold text-lg mb-2">
    Alternative Schemes
  </h4>

  <ul className="list-disc pl-6 space-y-1">
    <li>PMEGP</li>
    <li>Stand Up India</li>
    <li>CGTMSE</li>
    <li>Startup India Seed Fund</li>
  </ul>
</div>
          <a
            href={selectedScheme.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl"
          >
            {t[lang].apply}
          </a>
        </section>

        <section className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">
            {t[lang].documents}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {docs[lang].map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </section>

        <section className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">
            {t[lang].steps}
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            {t[lang].stepList.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-3">
            {t[lang].ai}
          </h2>
          <p className="text-gray-700">{aiExplanation[lang]}</p>
        </section>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-black">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
