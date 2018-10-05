//http://www.sqlitetutorial.net/sqlite-nodejs/connect/
//https://www.sqlite.org/cli.html

const sqlite3 = require('sqlite3').verbose();

let dbFile = "db_data.db";

let conn = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    return console.error(err.message);
  }
    console.log('sqlite3 Connection was sucefull .');
    
});


let TableName="tbl_exames";

let sqlCreateTableExame = "CREATE TABLE "+TableName+
    "("+
       "id integer PRIMARY KEY AUTOINCREMENT, "+
       "nome varchar(100),"+
	   
       "eletroforese_de_hemoglobina INTEGER ,"+
	   "eletroforese_de_proteina INTEGER ,"+
	   
	   "sodio INTEGER ,"+
	   "potassio INTEGER ,"+
	   "calcio INTEGER ,"+
	   "magnesio INTEGER ,"+
	   "fosforo INTEGER ,"+
	   "cloro INTEGER ,"+
	   
	   "aldolase INTEGER ,"+
	   "CPK INTEGER ,"+
	   "DHL INTEGER ,"+
	   "Fosfatase_acida_fração_prostatica INTEGER ,"+
	   "Fosfatase_acida_total INTEGER ,"+
	   
	   "Amilase INTEGER ,"+
	   "Lipase INTEGER ,"+
	   "Fosfase_Alcalina INTEGER ,"+
	   "Gama_GT INTEGER ,"+
	   "TGO_AST INTEGER ,"+
	   "TGP_ALT INTEGER ,"+
	   "Bilirrubina INTEGER ,"+
	   
	   "Cretinina INTEGER ,"+
	   "Ureia INTEGER ,"+
	   
	   "Colesterol INTEGER ,"+
	   "HDL_Colesterol INTEGER ,"+
	   "VLDL_Colesterol INTEGER ,"+
	   "LDL_Colesterol INTEGER ,"+
	   "Triglicerides INTEGER ,"+
	   
	   "Acido_Urico INTEGER ,"+
	   "Ferritina INTEGER ,"+
	   "Ferro INTEGER ,"+
	   "Transferrina INTEGER ,"+
	   "Glicose INTEGER ,"+
	   "Hb_glicada INTEGER ,"+
	   "Vitamina_B12 INTEGER ,"+
	   "Vitamina_D INTEGER ,"+
	   
	   "Adenovirus INTEGER ,"+
	   "Citomegalovirus INTEGER ,"+
	   "Chagas INTEGER ,"+
	   "HepatiteA INTEGER ,"+
	   "HepatiteB INTEGER ,"+
	   "HepatiteC INTEGER ,"+
	   "Herpes_simples1_2 INTEGER ,"+
	   "HIV_1_2 INTEGER ,"+
	   "HTLV_1_2 INTEGER ,"+
	   "EBV INTEGER ,"+
	   "Rubeola INTEGER ,"+
	   "Sifilis_completa INTEGER ,"+
	   "Sifilis_VDRL INTEGER ,"+
	   "Toxoplasmose INTEGER ,"+
	   
	   "FAN_Hep2 INTEGER ,"+
	   "Anti_DNA INTEGER ,"+
	   "AntiSSA_Ro INTEGER ,"+
	   "Anti_SSB_La INTEGER ,"+
	   "Anti_Sm INTEGER ,"+
	   "Anti_RNP INTEGER ,"+
	   "Anti_ENA INTEGER ,"+
	   "Fator_Reumatoide INTEGER ,"+
	   "P_ANCA INTEGER ,"+
	   "C_ANCA INTEGER ,"+
	   
	   "Sifilis_completa INTEGER ,"+
	   "Sifilis_VDRL INTEGER ,"+
	   "Toxoplasmose INTEGER ,"+
	   
	   "ASLO INTEGER ,"+
	   "Beta_HCG_Quantitativo INTEGER ,"+
	   "Complemento_C3 INTEGER ,"+
	   "Complemento_C4 INTEGER ,"+
	   "IgE_Total INTEGER ,"+
	   "PCR INTEGER ,"+
	   
	   "TSH INTEGER ,"+
	   "T4L INTEGER ,"+
	   "T3 INTEGER ,"+
	   "T4 INTEGER ,"+
	   "Anti_TPO INTEGER ,"+
	   "Anti_tireoglobulina INTEGER ,"+
	   "GH INTEGER ,"+
	   "PTH INTEGER ,"+
	   "LH INTEGER ,"+
	   "FSH INTEGER ,"+
	   
	   "Prolactina INTEGER ,"+
	   "Estradiol INTEGER ,"+
	   "DHEA INTEGER ,"+
	   "DHEAS INTEGER ,"+
	   "Androstenediona INTEGER ,"+
	   "Testosterona INTEGER ,"+
	   "Testosterona_Livre INTEGER ,"+

	   "ACTH INTEGER ,"+
	   "Cortisol_Serico INTEGER ,"+
	   "Cortisol_Urinario INTEGER ,"+
	   "Aldosterona INTEGER ,"+
	   "Aldolase INTEGER ,"+
	   "Insulina INTEGER ,"+
	   "Peptídeo_c INTEGER ,"+
	   
	   "Coprocultura INTEGER ,"+
	   "Cultura_de_BK INTEGER ,"+
	   "Cultura_de_fungos INTEGER ,"+
	   "Fungigrama INTEGER ,"+
	   "Cultura_de_Secrecao INTEGER ,"+
	   "Antibiograma INTEGER ,"+
	   
	   "PPF INTEGER ,"+
	   "Anal_Swab INTEGER ,"+

	   "Hemograma_Completo INTEGER ,"+
	   "Hb+Ht INTEGER ,"+
	   "Plaquetas INTEGER ,"+
	   "Reticuloticos INTEGER ,"+
	   "VHS INTEGER ,"+
	   "Tipagem_Sanguinea INTEGER ,"+
	   "Celulas_LE INTEGER ,"+
	   "Falcizacao_Hemacias INTEGER ,"+

	   "Coagulograma INTEGER ,"+
	   "Tempo_Protrombina INTEGER ,"+
	   "Tempo_Tromboplastina_Ativado INTEGER ,"+
	   "Tempo_Trombina INTEGER ,"+
	   "Dimero_d INTEGER ,"+
	   
	   "Clerance_Creatinina INTEGER ,"+
	   "Citrato INTEGER ,"+	   
	   "Calcio INTEGER ,"+
	   "Oxalato INTEGER ,"+
	   "Proteinura INTEGER ,"+
	   "Acido_Vanilmandelico INTEGER ,"+
	   
	   "Sodio INTEGER ,"+
	   "Acido_Urico INTEGER ,"+	
	   "Cistina INTEGER ,"+
	   "Potassio INTEGER ,"+	   
	   "Microalbuminuria INTEGER ,"+
	   "Urina_I INTEGER ,"+
	   "Urocultura INTEGER ,"+
	   "Antibiograma INTEGER "+	   
	   
    ")";


exports.persistence = {    
    
    generateDatabase : function(){
        conn.run(sqlCreateTableExame);
    },
        
    close_connection : function(){
       conn.close();
    },
    
    persist : function(p1,p2){
        console.log(" persist : function("+p1+","+p2+"){...");
        var stmt = conn.prepare("INSERT INTO "+TableName+" VALUES ("+p1+","+p2+")");
        stmt.run(p1, p2);
        stmt.finalize();
    },

    select : function(sqlSelect){
        conn.each(sqlSelect, function(err, row) {
            console.log("Exame id : "+row.id, row.nome,row.nome_exame);
        });
    }
}


