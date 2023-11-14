function myFunction() {
    let stockMaglieteVerdi = 50;
    let magliettaVerde = "verdi"
  
    let stockMaglieteBlu = 40;
    let magliettaBlu = "blu"
  
    let stockMaglieteGiallo = 30;
    let magliettaGiallo = "gialle"
  
  
    let coloreMaglieta = parseInt(prompt("Schegli il colore della maglietta tra:\n\n1. Verde\n\n2. Blu\n\n3. Gialla"));
  
    switch (coloreMaglieta) {
        case 1:
            let quantitaMaglieteVerdi = parseInt(prompt("Seleziona la quantita delle magliete verdi. Max:50"));
            if (stockMaglieteVerdi - quantitaMaglieteVerdi >= 0) {
                stockMaglieteVerdi = stockMaglieteVerdi - quantitaMaglieteVerdi;
                let pagamento = parseInt(prompt("Schegli il metodo di pagamenti:\n\n1. PayPal\n\n2. Bonifico"));
                switch (pagamento) {
                    case 1:
                    let PaPpal = parseInt(prompt("Inserisci l'email"));
              
                    break;
  
                    case 2:
                    let Bonifico = parseInt(prompt("Inserisci l'iban"));
                        break;
                    default:
                        break;
                }
                alert("Complimenti hai comprato " + quantitaMaglieteVerdi + " magliete " + magliettaVerde + " adesso nel magazino sono rimaste " + stockMaglieteVerdi + " magliete "+magliettaVerde);
            }
             else {
                alert("Quantita magliete non disponibili");
               
                
            }
            break;
            
  
        case 2:
            let quantitaMaglieteBlu = parseInt(prompt("Seleziona la quantita delle magliete blu. Max:40"));
            if (stockMaglieteBlu - quantitaMaglieteBlu >= 0) {
                stockMaglieteBlu = stockMaglieteBlu - quantitaMaglieteBlu;
                let pagamento = parseInt(prompt("Schegli il metodo di pagamenti:\n\n1. PayPal\n\n2. Bonifico"));
                switch (pagamento) {
                    case 1:
                    let PaPpal = parseInt(prompt("Inserisci l'email"));
                        break;
                    case 2:
                    let Bonifico = parseInt(prompt("Inserisci l'iban"));
                        break;
  
                    default:
                        break;
                }
                alert("Complimenti hai comprato " + quantitaMaglieteBlu + " magliete " + magliettaBlu + " adesso nel magazino sono rimaste " + stockMaglieteBlu + " magliete"+ magliettaBlu);
            } else {
                alert("Quantita magliete non disponibili");
                alert("L'operazione e stata anulatta");
            }
            break;
  
        case 3:
            let quantitaMaglieteGiallo = parseInt(prompt("Seleziona la quantita delle magliete Gialle. Max:30"));
            if (stockMaglieteGiallo - quantitaMaglieteGiallo >= 0) {
                stockMaglieteGiallo = stockMaglieteGiallo - quantitaMaglieteGiallo;
                let pagamento = parseInt(prompt("Schegli il metodo di pagamenti:\n\n1. PayPal\n\n2. Bonifico"));
                switch (pagamento) {
                    case 1:
                    let PaPpal = parseInt(prompt("Inserisci l'email"));
                        break;
                    case 2:
                    let Bonifico = parseInt(prompt("Inserisci l'iban"));
                        break;
  
                    default:
                        break;
                }
                alert("Complimenti hai comprato " + quantitaMaglieteGiallo + " magliete " + magliettaGiallo + " adesso nel magazino sono rimaste " + stockMaglieteGiallo + " magliete " + magliettaGiallo);
            } else {
                alert("Quantita magliete non disponibili");
            }
            break;
        default:
            alert("L'operazione e stata anulatta");
            break;
    }
    document.getElementById("demo");
  }