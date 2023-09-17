"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedCmd = void 0;
const pbtechSchema_1 = __importDefault(require("../models/pbtechSchema"));
const dbDisconnect_1 = require("../db/dbDisconnect");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const log = console.log;
const seedCmd = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seedMsg = [
            {
                brand: "MSI",
                model: "MSI GF63 Thin",
                screen_size: 15.6,
                storage: 512,
                RAM: 8,
                CPU: "Intel Core i5-9300H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1499,
                image: readFile("msigf63.webp"),
            },
            {
                brand: "MSI",
                model: "MSI GF63 Thin 12UCX",
                screen_size: 15.6,
                storage: 512,
                RAM: 8,
                CPU: "Intel Core i5-11300H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1599,
                image: readFile("msigf63thin.webp"),
            },
            {
                brand: "Asus",
                model: "ASUS TUF Gaming F15",
                screen_size: 15.6,
                storage: 512,
                RAM: 8,
                CPU: "Intel Core i5-10300H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1599,
                image: readFile("tuff15.webp"),
            },
            {
                brand: "Asus",
                model: "ASUS ROG Zephyrus G14",
                screen_size: 14,
                storage: 512,
                RAM: 16,
                CPU: "AMD Ryzen 7 4800HS",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1999,
                image: readFile("zephyrusg14.webp"),
            },
            {
                brand: "Lenovo",
                model: "Lenovo Legion Slim 5",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "AMD Ryzen 7 5800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 4060",
                price: 2499,
                image: readFile("lenovolegionslim5.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Cyborg 15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-11800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3060",
                price: 2499,
                image: readFile("msicyborg15.webp"),
            },
            {
                brand: "Razer",
                model: "Razer Blade 15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-11800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3070",
                price: 2999,
                image: readFile("razerblade15.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS TUF F15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-11800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3070",
                price: 2999,
                image: readFile("tuff15.1.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Katana 17",
                screen_size: 17.3,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-13620H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4060",
                price: 2999,
                image: readFile("msikatana17.webp"),
            },
            {
                brand: "HP",
                model: "HP Victus 16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-13500HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 1899,
                image: readFile("hpvictus16.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Zephyrus Duo 16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Ryzen 9 7945HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4080",
                price: 4999,
                image: readFile("zephyrusduo16.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Zephyrus G14",
                screen_size: 14,
                storage: 1024,
                RAM: 16,
                CPU: "AMD Ryzen 7 7735HS",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050",
                price: 1999,
                image: readFile("zephyrusg14.1.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Strix G16",
                screen_size: 16.1,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-11800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("rogstrixg16.webp"),
            },
            {
                brand: "ASUS",
                model: "Zenbook Pro Duo 14",
                screen_size: 14,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-11800H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050Ti",
                price: 2999,
                image: readFile("zenbookpro14.webp"),
            },
            {
                brand: "Acer",
                model: "Acer Aspire A715",
                screen_size: 15.6,
                storage: 512,
                RAM: 8,
                CPU: "Intel Core i5-11300H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1599,
                image: readFile("aspirea715.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Strix Scar 16",
                screen_size: 16.1,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i9-13980HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4080",
                price: 4999,
                image: readFile("rogstrixscar16.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Strix G16",
                screen_size: 16.1,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i9-13980HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 3999,
                image: readFile("rogstrixg16.1.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS TUF F15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-12700H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("tuff15.2.webp"),
            },
            {
                brand: "Lenovo",
                model: "Lenovo Legion Slim 5",
                screen_size: 15.6,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-13700H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 3999,
                image: readFile("lenovolegionslim5.webp"),
            },
            {
                brand: "Razer",
                model: "Razer Blade 14",
                screen_size: 14,
                storage: 1024,
                RAM: 16,
                CPU: "Ryzen 9 6900HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3070Ti",
                price: 2999,
                image: readFile("razerblade14.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Cyborg 15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2499,
                image: readFile("msicyborg15.2.webp"),
            },
            {
                brand: "Acer",
                model: "Acer Nitro 5",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-12700H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050",
                price: 1999,
                image: readFile("acernitro5.webp"),
            },
            {
                brand: "Acer",
                model: "Acer Nitro 5",
                screen_size: 15.6,
                storage: 512,
                RAM: 32,
                CPU: "Intel Core i7-12650H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2499,
                image: readFile("acernitro5.1.webp"),
            },
            {
                brand: "MSI",
                model: "MSI GF63 Thin 11UC",
                screen_size: 15.6,
                storage: 512,
                RAM: 8,
                CPU: "Intel Core i5-11400H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050",
                price: 1999,
                image: readFile("msigf63thin.1.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Katana 15",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-12650H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 3999,
                image: readFile("msikatana15.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Katana 15",
                screen_size: 15.6,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-13620H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("msikatana15.1.webp"),
            },
            {
                brand: "Lenovo",
                model: "Lenovo LOQ",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-13620H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("lenovoloq.webp"),
            },
            {
                brand: "MSI",
                model: "MSI GF63 Thin 12UCX",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 2050",
                price: 2499,
                image: readFile("msigf63thin.2.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Stealth 16",
                screen_size: 16.1,
                storage: 2048,
                RAM: 32,
                CPU: "Intel Core i9-13900H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 5999,
                image: readFile("msistealth16.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Katana 15",
                screen_size: 15.6,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 3999,
                image: readFile("msikatana15.2.webp"),
            },
            {
                brand: "HP",
                model: "HP Victus 16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-13700HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("hpvictus16.1.webp"),
            },
            {
                brand: "HP",
                model: "HP Victus 16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-12700H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3060",
                price: 2499,
                image: readFile("hpvictus16.2.webp"),
            },
            {
                brand: "Lenovo",
                model: "Lenovo IdeaPad Gaming 3i",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050",
                price: 1999,
                image: readFile("lenovoideapadi3.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Vector GP68HX",
                screen_size: 16.1,
                storage: 1024,
                RAM: 32,
                CPU: "Intel Core i9-12900HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4080",
                price: 5999,
                image: readFile("msivector.webp"),
            },
            {
                brand: "Razer",
                model: "Razer Blade 14",
                screen_size: 14,
                storage: 1024,
                RAM: 16,
                CPU: "Ryzen 9 6900HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3070Ti",
                price: 2999,
                image: readFile("razerblade14.1.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Strix Scar 18",
                screen_size: 17.3,
                storage: 2048,
                RAM: 32,
                CPU: "Intel Core i9-13980HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4080",
                price: 5999,
                image: readFile("rogstrixscar18.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS TUF A16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Ryzen 9 7940HS",
                OS: "Windows 10 Home",
                GPU: "RX7600S",
                price: 2999,
                image: readFile("tuffa16.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Stealth 15",
                screen_size: 15.6,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-13620H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("msistealth15.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS ROG Strix G16",
                screen_size: 16.1,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-13650HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4060",
                price: 2999,
                image: readFile("rogstrixg16.2.webp"),
            },
            {
                brand: "Dell",
                model: "Alienware M16",
                screen_size: 16.1,
                storage: 1024,
                RAM: 32,
                CPU: "Intel Core i9-13900HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4070",
                price: 4999,
                image: readFile("alienwarem16.webp"),
            },
            {
                brand: "Razer",
                model: "Razer Blade 16",
                screen_size: 16.1,
                storage: 2048,
                RAM: 32,
                CPU: "Intel Core i9-13900HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4090",
                price: 9999,
                image: readFile("razerblade16.webp"),
            },
            {
                brand: "MSI",
                model: "MSI Stealth 15",
                screen_size: 15.6,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-13620H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4060",
                price: 2999,
                image: readFile("msistealth15.1.webp"),
            },
            {
                brand: "GigaByte",
                model: "GigaByte G5",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2499,
                image: readFile("gigabyteg5.webp"),
            },
            {
                brand: "HP",
                model: "HP Omen 16",
                screen_size: 16.1,
                storage: 1024,
                RAM: 16,
                CPU: "Intel Core i7-13700HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4080",
                price: 4999,
                image: readFile("hpomen16.webp"),
            },
            {
                brand: "Acer",
                model: "Acer Nitro 5",
                screen_size: 15.6,
                storage: 512,
                RAM: 16,
                CPU: "Intel Core i7-12700H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 3050",
                price: 1999,
                image: readFile("acernitro5.2.webp"),
            },
            {
                brand: "HP",
                model: "HP Victus 16",
                screen_size: 16.1,
                storage: 1536,
                RAM: 32,
                CPU: "Intel Core i7-13700HX",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 2999,
                image: readFile("hpvictus16.3.webp"),
            },
            {
                brand: "Acer",
                model: "Acer Aspire A715",
                screen_size: 15.6,
                storage: 1536,
                RAM: 16,
                CPU: "Intel Core i5-12450H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce GTX 1650",
                price: 1599,
                image: readFile("aspirea715.1.webp"),
            },
            {
                brand: "ASUS",
                model: "ASUS Zenbook Pro Duo 14",
                screen_size: 14,
                storage: 1024,
                RAM: 32,
                CPU: "Intel Core i9-13900H",
                OS: "Windows 10 Home",
                GPU: "NVIDIA GeForce RTX 4050",
                price: 4999,
                image: readFile("zenbookpro14duo.webp"),
            },
        ];
        yield pbtechSchema_1.default.insertMany(seedMsg);
        log("Seed Complete!");
    }
    catch (err) {
        log("Error Seeding data into DB", err);
    }
    finally {
        (0, dbDisconnect_1.dbDisconnect)();
    }
});
exports.seedCmd = seedCmd;
function readFile(file) {
    const imagesDir = path_1.default.join(__dirname, "..", "images");
    const filePath = path_1.default.join(imagesDir, file);
    console.log("Reading file: ", filePath);
    return fs_1.default.readFileSync(filePath);
}
//# sourceMappingURL=seed.js.map