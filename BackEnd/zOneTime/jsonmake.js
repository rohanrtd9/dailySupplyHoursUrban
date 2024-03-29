const data = [
    {
      "Division Code": 3,
      "Division": "Agra",
      "District Code": [118, 143, 166, 167],
      "District Name": ["AGRA", "FIROZABAD", "MAINPURI", "MATHURA"],
      "Scheduled Supply Hours": [23, 24, 22, 21],
      "Email": "agra@gmail.com",
      "Phone No.": "9876543210",
      "Username": "aguser",
      "Password": "abc12345"
    },
    {
      "Division Code": 18,
      "Division": "Aligarh",
      "District Code": [119, 138, 163, 633],
      "District Name": ["ALIGARH", "ETAH", "HATHRAS", "Kasganj"],
      "Scheduled Supply Hours": [24, 21, 23, 22],
      "Email": "aligarh@gmail.com",
      "Phone No.": "8765432109",
      "Username": "aliguser",
      "Password": "123abcde"
    },
    {
      "Division Code": 7,
      "Division": "Allahabad",
      "District Code": [142, 158, 174, 120],
      "District Name": ["FATEHPUR", "KAUSHAMBI", "PRATAPGARH", "PRAYAGRAJ"],
      "Scheduled Supply Hours": [21, 23, 24, 22],
      "Email": "allahabad@gmail.com",
      "Phone No.": "7654321098",
      "Username": "alluser",
      "Password": "qwerty12"
    },
    {
      "Division Code": 12,
      "Division": "Azamgarh",
      "District Code": [123, 126, 168],
      "District Name": ["AZAMGARH", "BALLIA", "MAU"],
      "Scheduled Supply Hours": [22, 24, 21],
      "Email": "azamgarh@gmail.com",
      "Phone No.": "6543210987",
      "Username": "azamuser",
      "Password": "456qwert"
    },
    {
      "Division Code": 4,
      "Division": "Bareilly",
      "District Code": [130, 133, 173, 180],
      "District Name": ["BAREILLY", "BUDAUN", "PILIBHIT", "SHAHJAHANPUR"],
      "Scheduled Supply Hours": [23, 22, 21, 24],
      "Email": "bareilly@gmail.com",
      "Phone No.": "5432109876",
      "Username": "baruser",
      "Password": "7890abcd"
    },
    {
      "Division Code": 14,
      "Division": "Basti",
      "District Code": [131, 178, 182],
      "District Name": ["BASTI", "SANT KABEER NAGAR", "SIDDHARTH NAGAR"],
      "Scheduled Supply Hours": [24, 21, 23],
      "Email": "basti@gmail.com",
      "Phone No.": "4321098765",
      "Username": "basuser",
      "Password": "abcd1234"
    },
    {
      "Division Code": 9,
      "Division": "Chitrakoot",
      "District Code": [128, 136, 149, 165],
      "District Name": ["BANDA", "CHITRAKOOT", "HAMIRPUR", "MAHOBA"],
      "Scheduled Supply Hours": [22, 24, 21, 23],
      "Email": "chitrakoot@gmail.com",
      "Phone No.": "3210987654",
      "Username": "chituser",
      "Password": "1234abcd"
    },
    {
      "Division Code": 16,
      "Division": "Devipatan",
      "District Code": [125, 127, 147, 181],
      "District Name": ["BAHRAICH", "BALRAMPUR", "GONDA", "SHRAVASTI"],
      "Scheduled Supply Hours": [21, 23, 24, 22],
      "Email": "devipatan@gmail.com",
      "Phone No.": "2109876543",
      "Username": "devuser",
      "Password": "abcd5678"
    },
    {
      "Division Code": 17,
      "Division": "Faizabad",
      "District Code": [121, 640, 140, 129, 185],
      "District Name": ["AMBEDKAR NAGAR", "Amethi", "AYODHYA", "BARABANKI", "SULTANPUR"],
      "Scheduled Supply Hours": [24, 22, 21, 23, 24],
      "Email": "faizabad@gmail.com",
      "Phone No.": "1098765432",
      "Username": "faizuser",
      "Password": "5678efgh"
    },
    {
      "Division Code": 13,
      "Division": "Gorakhpur",
      "District Code": [137, 148, 160, 164],
      "District Name": ["DEORIA", "GORAKHPUR", "KUSHI NAGAR", "MAHARAJGANJ"],
      "Scheduled Supply Hours": [21, 23, 24, 22],
      "Email": "gorakhpur@gmail.com",
      "Phone No.": "987654321",
      "Username": "goruser",
      "Password": "efgh1234"
    },
    {
      "Division Code": 8,
      "Division": "Jhansi",
      "District Code": [151, 153, 161],
      "District Name": ["JALAUN", "JHANSI", "LALITPUR"],
      "Scheduled Supply Hours": [23, 24, 21],
      "Email": "jhansi@gmail.com",
      "Phone No.": "9876543210",
      "Username": "jhanuser",
      "Password": "9012ijkl"
    },
    {
      "Division Code": 6,
      "Division": "Kanpur",
      "District Code": [122, 139, 141, 155, 156, 157],
      "District Name": ["AURAIYA", "ETAWAH", "FARRUKHABAD", "KANNAUJ", "KANPUR DEHAT", "KANPUR NAGAR"],
      "Scheduled Supply Hours": [22, 24, 23, 21, 23, 24],
      "Email": "kanpur@gmail.com",
      "Phone No.": "8765432109",
      "Username": "kanuser",
      "Password": "ijkl5678"
    },
    {
      "Division Code": 15,
      "Division": "Lucknow",
      "District Code": [150, 159, 162, 175, 183, 186],
      "District Name": ["HARDOI", "KHERI", "LUCKNOW", "RAE BARELI", "SITAPUR", "UNNAO"],
      "Scheduled Supply Hours": [24, 22, 21, 23, 21, 24],
      "Email": "lucknow@gmail.com",
      "Phone No.": "7654321098",
      "Username": "lucuser",
      "Password": "3456mnop"
    },
    {
      "Division Code": 2,
      "Division": "Meerut",
      "District Code": [124, 134, 144, 145, 661, 169],
      "District Name": ["BAGHPAT", "BULANDSHAHR", "GAUTAM BUDDHA NAGAR", "GHAZIABAD", "HAPUR", "MEERUT"],
      "Scheduled Supply Hours": [23, 21, 24, 22, 21, 23],
      "Email": "meerut@gmail.com",
      "Phone No.": "6543210987",
      "Username": "meeuruser",
      "Password": "mnop7890"
    },
    {
      "Division Code": 11,
      "Division": "Mirzapur",
      "District Code": [179, 170, 184],
      "District Name": ["BHADOHI", "MIRZAPUR", "SONBHADRA"],
      "Scheduled Supply Hours": [22, 23, 24],
      "Email": "mirzapur@gmail.com",
      "Phone No.": "5432109876",
      "Username": "mirzuser",
      "Password": "8901qrst"
    },
    {
      "Division Code": 5,
      "Division": "Moradabad",
      "District Code": [154, 132, 171, 176, 659],
      "District Name": ["AMROHA", "BIJNOR", "MORADABAD", "RAMPUR", "SAMBHAL"],
      "Scheduled Supply Hours": [24, 22, 21, 23, 23],
      "Email": "moradabad@gmail.com",
      "Phone No.": "4321098765",
      "Username": "moruser",
      "Password": "qrst2345"
    },
    {
      "Division Code": 1,
      "Division": "Saharanpur",
      "District Code": [172, 177, 660],
      "District Name": ["MUZAFFARNAGAR", "SAHARANPUR", "SHAMLI"],
      "Scheduled Supply Hours": [21, 24, 22],
      "Email": "saharanpur@gmail.com",
      "Phone No.": "3210987654",
      "Username": "sahuser",
      "Password": "2345uvwx"
    },
    {
      "Division Code": 10,
      "Division": "Varanasi",
      "District Code": [135, 146, 152, 187],
      "District Name": ["CHANDAULI", "GHAZIPUR", "JAUNPUR", "VARANASI"],
      "Scheduled Supply Hours": [23, 22, 21, 24],
      "Email": "varanasi@gmail.com",
      "Phone No.": "2109876543",
      "Username": "varuser",
      "Password": "uvwx6789"
    }
  ]
  ;
  const modifiedData = data.map((item) => {
    const modifiedItem = {};
    for (let key in item) {
      const modifiedKey = key.replace(/ /g, "_"); // Replace spaces with underscores
      modifiedItem[modifiedKey] = item[key];
    }
    return modifiedItem;
  });

  for (const obj of modifiedData) {
    const randomValues = [];
    for (let i = 0; i < obj["District_Code"].length; i++) {
      const randomValue = Math.floor(Math.random() * 8) + 16; // Generate random value between 14 and 16
      randomValues.push(randomValue);
    }
    obj["Scheduled_Supply_Hours_Rural"] = randomValues;
  }
  

  const jsonString = JSON.stringify(modifiedData, null, 2);

  console.log(jsonString);