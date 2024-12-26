function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const result = document.getElementById("result");
    const tips = document.getElementById("tips");

    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "Silakan masukkan data yang valid.";
        tips.textContent = "";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";
    let tipsText = "";

    if (bmi < 18.5) {
        category = "Kurus";
        tipsText = "Tips: Makan lebih banyak kalori, fokus pada makanan bergizi dan konsultasikan dengan ahli gizi.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
        tipsText = "Tips: Pertahankan pola makan seimbang dan rutin berolahraga.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Gemuk";
        tipsText = "Tips: Perhatikan asupan kalori, tingkatkan aktivitas fisik.";
    } else {
        category = "Obesitas";
        tipsText = "Tips: Konsultasikan dengan dokter atau ahli gizi untuk rencana penurunan berat badan.";
    }

    result.textContent = `BMI Anda adalah: ${bmi.toFixed(2)} (${category})`;
    tips.textContent = tipsText;
}
