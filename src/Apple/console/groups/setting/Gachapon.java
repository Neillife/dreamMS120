/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Apple.console.groups.setting;

import constants.ServerConstants;
import database.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import server.MapleItemInformationProvider;
import server.Randomizer;
import tools.Pair;

/**
 *
 * @author Msi
 */
public class Gachapon {

    private static final Gachapon instance = new Gachapon();
    private final List<Gachapon> globaldrops = new ArrayList<>();

    protected Gachapon() {
        retrieveGlobal();
    }

    public static final Gachapon getInstance() {
        return instance;
    }

    public final List<Gachapon> getGlobalDrop() {
        return globaldrops;
    }

    private final void retrieveGlobal() {
        PreparedStatement ps = null;
        ResultSet rs = null;
        try {
            final Connection con = DatabaseConnection.getConnection();
            ps = con.prepareStatement("SELECT * FROM gachapon");
            rs = ps.executeQuery();
            while (rs.next()) {
                globaldrops.add(
                        new Gachapon(
                                rs.getInt("itemid"),
                                rs.getInt("chance"),
                                rs.getString("comments"),
                                rs.getInt("continent")
                        ));
            }
            rs.close();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Error retrieving drop" + e);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (rs != null) {
                    rs.close();
                }
            } catch (SQLException ignore) {
            }
        }
    }

    public final void clearDrops() {
        globaldrops.clear();
        retrieveGlobal();
    }

    public Gachapon(int itemId, int chance, String comments, int continent) {
        this.itemId = itemId;
        this.chance = chance;
        this.comments = comments;
        this.continent = continent;
    }

    public Gachapon(int itemId, int chance, int continent, byte dropType, int Minimum, int Maximum, short questid) {
        this.itemId = itemId;
        this.chance = chance;
        this.dropType = dropType;
        this.continent = continent;
        this.questid = questid;
        this.Minimum = Minimum;
        this.Maximum = Maximum;
    }

    public String comments;
    public byte dropType;
    public short questid;
    public int itemId, chance, Minimum, Maximum, continent;
    public boolean onlySelf = false;

    public static Pair<Integer, Integer> lottery(int job) {
        final Gachapon mi = Gachapon.getInstance();
        final List<Gachapon> globalEntry = new ArrayList<>(mi.getGlobalDrop());//LinkedList
        final List<Integer> Probability = new ArrayList<>();//機率
        for (final Gachapon de : globalEntry) {//載入機率
            if (!Probability.contains(de.chance) && de.continent == job) {
                Probability.add(de.chance);
            }
        }
        Collections.sort(Probability);//排序
        //開始亂數
        int Rand = Randomizer.nextInt(1000000);
        int 中獎 = 0;
        boolean 開獎 = false;
        for (final int de : Probability) {//判斷中獎
            if (Rand < de) {
                中獎 = de;
                開獎 = true;
                break;
            }
        }
        if (開獎) {
            final List<Pair<Integer, Integer>> items = new ArrayList<>();//機率
            for (final Gachapon de : globalEntry) {//判斷中獎
                if (de.chance == 中獎 && de.continent == job) {
                    items.add(new Pair<>(de.itemId, de.chance));
                }
            }
            int j = Randomizer.rand(0, items.size() - 1);
            return items.get(j);
        } else {
            return null;
        }
    }

    public static Pair<String, String> SearchConsole(int job, int s) {
        StringBuilder sbList = new StringBuilder("\r\n");
        StringBuilder sbItem = new StringBuilder("\r\n");
        StringBuilder 轉蛋機_DEBUG = new StringBuilder();
        final Gachapon mi = Gachapon.getInstance();
        final List<Gachapon> globalEntry = new ArrayList<>(mi.getGlobalDrop());
        final List<Integer> Probability = new ArrayList<>();//機率
        int count = 0;//次數
        //載入機率列表
        for (final Gachapon de : globalEntry) {//載入機率
            if (!Probability.contains(de.chance) && de.continent == job) {
                Probability.add(de.chance);
            }
        }
        Collections.sort(Probability);//排序
        switch (s) {
            case -2://玩家顯示
                sbList.append("#L999#").append("查看有機率獲得的獎品").append("#l");
                break;
            case -1://GM顯示
                for (int x = 1; x <= Probability.size(); x++) {
                    sbList.append("#L").append(x).append("#").append((Probability.size() == x ? "一般" : x + "獎")).append("#l").append("\t");
                }//輸出完畢
                break;
            case 999:
                //載入指定機率列表
                for (final Gachapon de : globalEntry) {//載入機率
                    if (de.chance != Collections.max(Probability) && de.continent == job) {
                        sbItem.append("#v").append(de.itemId).append(":#");
                        count++;
                    }
                }
                break;
            default:
                //載入指定機率列表
                for (final Gachapon de : globalEntry) {//載入機率
                    if (de.chance == Probability.get(s - 1) && de.continent == job) {
                        if (count % 4 == 0 && ServerConstants.轉蛋機_DEBUG) {
                            sbItem.append("\r\n");
                        }
                        if (MapleItemInformationProvider.getInstance().itemExists(de.itemId)) {
                            sbItem.append("#v").append(de.itemId).append(":#").append(ServerConstants.轉蛋機_DEBUG ? de.itemId : "");
                        } else {
                            sbItem.append("#fUI/UIWindow.img/QuestIcon/5/0##r").append(de.itemId).append("").append(ServerConstants.轉蛋機_DEBUG ? de.itemId : "");
                        }
                        if (de.itemId >= 1300000 && de.itemId < 1800000 && ServerConstants.轉蛋機_DEBUG) {
                            轉蛋機_DEBUG.append(de.itemId).append(",");
                        }
                        count++;
                    }
                }
                break;
        }
        if (ServerConstants.轉蛋機_DEBUG) {
            System.err.println(轉蛋機_DEBUG);
        }
        return new Pair<>("#e查看本機台擁有..#n#b" + sbList.toString(), "以下列表共有" + count + sbItem.toString());
    }

    public final static void WriteItem() throws SQLException {
        MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
        Connection con = DatabaseConnection.getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("TRUNCATE TABLE gachapon");
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println("清空失敗" + e);
        }
        int[][] item = {
            {
                1002002, 1002003, 1002004, 1002005, 1002007, 1002009, 1002011, 1002021, 1002022, 1002023, 1002024, 1002025, 1002027, 1002028, 1002029, 1002030, 1002039, 1002040, 1002043, 1002044, 1002045, 1002046, 1002047, 1002048, 1002049, 1002050, 1002051, 1002052, 1002055, 1002056, 1002058, 1002059, 1002084, 1002085, 1002086, 1002087, 1002088, 1002091, 1002092, 1002093, 1002094, 1002095, 1002098, 1002099, 1002100, 1002101, 1002338, 1002339, 1002340, 1002377, 1002378, 1002379, 1002528, 1002529, 1002530, 1002531, 1002532, 1002551, 1040000, 1040009, 1040012, 1040015, 1040016, 1040021, 1040026, 1040028, 1040029, 1040030, 1040037, 1040038, 1040039, 1040040, 1040041, 1040085, 1040086, 1040087, 1040088, 1040089, 1040090, 1040091, 1040092, 1040093, 1040102, 1040103, 1040104, 1040111, 1040112, 1040113, 1040120, 1040121, 1040122, 1041014, 1041019, 1041020, 1041021, 1041022, 1041023, 1041024, 1041064, 1041084, 1041085, 1041086, 1041087, 1041088, 1041089, 1041091, 1041092, 1041093, 1041097, 1041098, 1041099, 1041119, 1041120, 1041121, 1041122, 1041123, 1041124, 1050000, 1050005, 1050006, 1050007, 1050011, 1050021, 1050022, 1050080, 1050081, 1050082, 1050083, 1051000, 1051001, 1051010, 1051011, 1051012, 1051013, 1051014, 1051015, 1051016, 1051077, 1051078, 1051079, 1051080, 1052075, 1060000, 1060008, 1060009, 1060010, 1060011, 1060016, 1060017, 1060018, 1060019, 1060020, 1060027, 1060028, 1060029, 1060030, 1060060, 1060074, 1060075, 1060076, 1060077, 1060078, 1060079, 1060080, 1060081, 1060082, 1060090, 1060091, 1060092, 1060100, 1060101, 1060102, 1060109, 1060110, 1060111, 1061014, 1061015, 1061016, 1061017, 1061018, 1061019, 1061020, 1061023, 1061083, 1061084, 1061085, 1061086, 1061087, 1061088, 1061090, 1061091, 1061092, 1061096, 1061097, 1061098, 1061118, 1061119, 1061120, 1061121, 1061122, 1061123, 1072000, 1072002, 1072003, 1072007, 1072009, 1072011, 1072039, 1072040, 1072041, 1072046, 1072047, 1072050, 1072051, 1072052, 1072053, 1072112, 1072113, 1072126, 1072127, 1072132, 1072133, 1072134, 1072135, 1072147, 1072148, 1072149, 1072154, 1072155, 1072156, 1072168, 1072196, 1072197, 1072198, 1072210, 1072211, 1072212, 1072220, 1072221, 1072222, 1072273, 1082000, 1082001, 1082003, 1082004, 1082005, 1082006, 1082007, 1082008, 1082009, 1082010, 1082011, 1082023, 1082024, 1082025, 1082035, 1082036, 1082059, 1082060, 1082061, 1082103, 1082104, 1082105, 1082114, 1082115, 1082116, 1082117, 1082128, 1082129, 1082130, 1082139, 1082140, 1082141, 1082168, 1092000, 1092001, 1092002, 1092004, 1092005, 1092006, 1092007, 1092009, 1092010, 1092011, 1092012, 1092013, 1092014, 1092015, 1092016, 1092017, 1092023, 1092024, 1092025, 1092026, 1092027, 1092028, 1092036, 1092037, 1092038, 1092046, 1092060,
                //爛武器
                1302001, 1302002, 1302003, 1302004, 1302005, 1302006, 1302008, 1302009, 1302010, 1302011, 1302012, 1302015, 1302018, 1302019, 1302023, 1302032, 1302037, 1302056, 1302059, 1302066, 1302068, 1302104, 1312001, 1312002, 1312003, 1312005, 1312006, 1312007, 1312008, 1312009, 1312010, 1312011, 1312015, 1312016, 1312030, 1312031, 1312033, 1322000, 1322002, 1322004, 1322010, 1322011, 1322014, 1322015, 1322016, 1322017, 1322018, 1322019, 1322020, 1322028, 1322029, 1322032, 1322045, 1322052, 1322055, 1402000, 1402001, 1402002, 1402003, 1402004, 1402005, 1402006, 1402007, 1402008, 1402011, 1402012, 1402015, 1402016, 1402017, 1402018, 1402035, 1402036, 1402037, 1402039, 1402040, 1412000, 1412001, 1412002, 1412003, 1412004, 1412005, 1412006, 1412007, 1412008, 1412009, 1412010, 1412012, 1412021, 1412026, 1412028, 1422000, 1422001, 1422002, 1422003, 1422004, 1422005, 1422006, 1422007, 1422008, 1422009, 1422010, 1422012, 1422013, 1422027, 1422028, 1422030, 1422031, 1422032, 1432000, 1432001, 1432002, 1432003, 1432004, 1432005, 1432006, 1432007, 1432010, 1432011, 1432030, 1432038, 1432041, 1432048, 1442000, 1442001, 1442002, 1442003, 1442004, 1442005, 1442006, 1442007, 1442008, 1442009, 1442010, 1442019, 1442020, 1442044, 1442045, 1442052, 1442080
            },
            {
                1002013, 1002016, 1002017, 1002034, 1002035, 1002036, 1002037, 1002038, 1002064, 1002065, 1002072, 1002073, 1002074, 1002075, 1002102, 1002103, 1002104, 1002105, 1002106, 1002141, 1002142, 1002143, 1002144, 1002145, 1002151, 1002152, 1002153, 1002154, 1002155, 1002215, 1002216, 1002217, 1002218, 1002242, 1002243, 1002244, 1002245, 1002246, 1002252, 1002253, 1002254, 1002271, 1002272, 1002273, 1002274, 1002363, 1002364, 1002365, 1002366, 1002398, 1002399, 1002400, 1002401, 1002773, 1040004, 1040017, 1040018, 1040019, 1040020, 1041015, 1041016, 1041017, 1041018, 1041025, 1041026, 1041029, 1041030, 1041031, 1041041, 1041042, 1041043, 1041051, 1041052, 1041053, 1050001, 1050002, 1050003, 1050008, 1050009, 1050010, 1050023, 1050024, 1050025, 1050026, 1050027, 1050028, 1050029, 1050030, 1050031, 1050035, 1050036, 1050037, 1050038, 1050039, 1050045, 1050046, 1050047, 1050048, 1050049, 1050053, 1050054, 1050055, 1050056, 1050067, 1050068, 1050069, 1050070, 1050072, 1050073, 1050074, 1050092, 1050093, 1050094, 1050095, 1050102, 1050103, 1050104, 1050105, 1051003, 1051004, 1051005, 1051023, 1051024, 1051025, 1051026, 1051027, 1051030, 1051031, 1051032, 1051033, 1051034, 1051044, 1051045, 1051046, 1051047, 1051052, 1051053, 1051054, 1051055, 1051056, 1051057, 1051058, 1051094, 1051095, 1051096, 1051097, 1051101, 1051102, 1051103, 1051104, 1052076, 1060012, 1060013, 1060014, 1060015, 1061010, 1061011, 1061012, 1061013, 1061021, 1061022, 1061027, 1061028, 1061034, 1061035, 1061036, 1061047, 1061048, 1061049, 1072006, 1072019, 1072020, 1072021, 1072023, 1072024, 1072044, 1072045, 1072072, 1072073, 1072074, 1072075, 1072076, 1072077, 1072078, 1072089, 1072090, 1072091, 1072114, 1072115, 1072116, 1072117, 1072136, 1072137, 1072138, 1072139, 1072140, 1072141, 1072142, 1072143, 1072157, 1072158, 1072159, 1072160, 1072169, 1072177, 1072178, 1072179, 1072206, 1072207, 1072208, 1072209, 1072223, 1072224, 1072225, 1072226, 1072268, 1082019, 1082020, 1082021, 1082022, 1082026, 1082027, 1082028, 1082051, 1082052, 1082053, 1082054, 1082055, 1082056, 1082062, 1082063, 1082064, 1082080, 1082081, 1082082, 1082086, 1082087, 1082088, 1082098, 1082099, 1082100, 1082121, 1082122, 1082123, 1082131, 1082132, 1082133, 1082134, 1082151, 1082152, 1082153, 1082154, 1082164, 1092021, 1092029, 1092045, 1942000, 1942001, 1942003, 1952000, 1952001, 1952003, 1962000, 1962001, 1962003, 1972000, 1972001, 1972003,
                //爛武器
                1372000, 1372001, 1372002, 1372003, 1372004, 1372005, 1372006, 1372007, 1372008, 1372009, 1372010, 1372011, 1372012, 1372013, 1372014, 1372015, 1372016, 1372017, 1372031, 1372032, 1372033, 1372035, 1372036, 1372037, 1372038, 1372039, 1372040, 1372041, 1372042, 1382000, 1382001, 1382002, 1382003, 1382004, 1382005, 1382006, 1382007, 1382008, 1382010, 1382011, 1382013, 1382014, 1382015, 1382016, 1382017, 1382018, 1382019, 1382035, 1382036, 1382037, 1382038, 1382040, 1382041, 1382045, 1382046, 1382047, 1382048, 1382069
            },
            {
                1002010, 1002057, 1002112, 1002113, 1002114, 1002115, 1002116, 1002117, 1002118, 1002119, 1002120, 1002121, 1002135, 1002136, 1002137, 1002138, 1002139, 1002156, 1002157, 1002158, 1002159, 1002160, 1002161, 1002162, 1002163, 1002164, 1002165, 1002166, 1002167, 1002168, 1002169, 1002170, 1002211, 1002212, 1002213, 1002214, 1002267, 1002268, 1002269, 1002270, 1002275, 1002276, 1002277, 1002278, 1002286, 1002287, 1002288, 1002289, 1002402, 1002403, 1002404, 1002405, 1002406, 1002407, 1002408, 1002547, 1040003, 1040007, 1040008, 1040011, 1040022, 1040023, 1040024, 1040025, 1040067, 1040068, 1040069, 1040070, 1040071, 1040072, 1040073, 1040074, 1040075, 1040076, 1040079, 1040080, 1040081, 1041007, 1041008, 1041013, 1041027, 1041028, 1041032, 1041033, 1041034, 1041035, 1041054, 1041055, 1041056, 1041061, 1041062, 1041063, 1041065, 1041066, 1041067, 1041068, 1041069, 1041081, 1041082, 1041083, 1050051, 1050052, 1050058, 1050059, 1050060, 1050061, 1050062, 1050063, 1050064, 1050075, 1050076, 1050077, 1050078, 1050088, 1050089, 1050090, 1050091, 1050106, 1050107, 1050108, 1051037, 1051038, 1051039, 1051041, 1051042, 1051043, 1051062, 1051063, 1051064, 1051065, 1051066, 1051067, 1051068, 1051069, 1051082, 1051083, 1051084, 1051085, 1051105, 1051106, 1051107, 1052071, 1060056, 1060057, 1060058, 1060059, 1060061, 1060062, 1060063, 1060064, 1060065, 1060068, 1060069, 1060070, 1061006, 1061009, 1061024, 1061025, 1061026, 1061050, 1061051, 1061052, 1061057, 1061058, 1061059, 1061060, 1061061, 1061062, 1061063, 1061064, 1061080, 1061081, 1061082, 1062002, 1062004, 1062006, 1072015, 1072016, 1072025, 1072026, 1072027, 1072034, 1072059, 1072060, 1072061, 1072067, 1072068, 1072069, 1072079, 1072080, 1072081, 1072082, 1072083, 1072101, 1072102, 1072103, 1072118, 1072119, 1072120, 1072121, 1072122, 1072123, 1072124, 1072125, 1072144, 1072145, 1072146, 1072164, 1072165, 1072166, 1072167, 1072170, 1072182, 1072183, 1072184, 1072185, 1072203, 1072204, 1072205, 1072227, 1072228, 1072229, 1072269, 1082012, 1082013, 1082014, 1082015, 1082016, 1082017, 1082018, 1082048, 1082049, 1082050, 1082068, 1082069, 1082070, 1082071, 1082072, 1082073, 1082083, 1082084, 1082085, 1082089, 1082090, 1082091, 1082106, 1082107, 1082108, 1082109, 1082110, 1082111, 1082112, 1082125, 1082126, 1082127, 1082158, 1082159, 1082160, 1082163,
                //爛武器
                1452000, 1452001, 1452002, 1452003, 1452004, 1452005, 1452006, 1452007, 1452008, 1452009, 1452010, 1452011, 1452012, 1452013, 1452014, 1452015, 1452017, 1452018, 1452019, 1452020, 1452021, 1452023, 1452024, 1452025, 1452026, 1452044, 1452046, 1452072, 1462000, 1462001, 1462002, 1462003, 1462004, 1462005, 1462006, 1462007, 1462008, 1462009, 1462010, 1462011, 1462012, 1462013, 1462015, 1462016, 1462017, 1462018, 1462020, 1462021, 1462022, 1462039, 1462041, 1462065
            },
            {
                1002107, 1002108, 1002109, 1002110, 1002111, 1002122, 1002123, 1002124, 1002125, 1002126, 1002127, 1002128, 1002129, 1002130, 1002131, 1002146, 1002147, 1002148, 1002149, 1002150, 1002171, 1002172, 1002173, 1002174, 1002175, 1002176, 1002177, 1002178, 1002179, 1002180, 1002181, 1002182, 1002183, 1002184, 1002185, 1002207, 1002208, 1002209, 1002210, 1002247, 1002248, 1002249, 1002281, 1002282, 1002283, 1002284, 1002285, 1002323, 1002324, 1002325, 1002326, 1002327, 1002328, 1002329, 1002330, 1002380, 1002381, 1002382, 1002383, 1002550, 1002656, 1040031, 1040032, 1040033, 1040034, 1040035, 1040042, 1040043, 1040044, 1040048, 1040049, 1040050, 1040057, 1040058, 1040059, 1040060, 1040061, 1040062, 1040063, 1040082, 1040083, 1040084, 1040094, 1040095, 1040096, 1040097, 1040098, 1040099, 1040100, 1040105, 1040106, 1040107, 1040108, 1040109, 1040110, 1040115, 1040116, 1040117, 1040118, 1041003, 1041036, 1041037, 1041038, 1041039, 1041040, 1041044, 1041045, 1041047, 1041048, 1041049, 1041050, 1041057, 1041058, 1041059, 1041060, 1041074, 1041075, 1041076, 1041077, 1041078, 1041079, 1041080, 1041094, 1041095, 1041096, 1041100, 1041101, 1041102, 1041103, 1041105, 1041106, 1041107, 1041115, 1041116, 1041117, 1041118, 1050096, 1050097, 1050098, 1050099, 1051006, 1051007, 1051008, 1051009, 1051090, 1051091, 1051092, 1051093, 1052072, 1060021, 1060022, 1060023, 1060024, 1060025, 1060031, 1060032, 1060033, 1060037, 1060038, 1060039, 1060043, 1060044, 1060045, 1060046, 1060050, 1060051, 1060052, 1060071, 1060072, 1060073, 1060083, 1060084, 1060085, 1060086, 1060087, 1060088, 1060089, 1060093, 1060094, 1060095, 1060097, 1060098, 1060099, 1060104, 1060105, 1060106, 1060107, 1061003, 1061029, 1061030, 1061031, 1061032, 1061033, 1061037, 1061038, 1061040, 1061041, 1061042, 1061043, 1061044, 1061045, 1061046, 1061053, 1061054, 1061055, 1061056, 1061069, 1061070, 1061071, 1061076, 1061077, 1061078, 1061079, 1061093, 1061094, 1061095, 1061099, 1061100, 1061101, 1061102, 1061104, 1061105, 1061106, 1061114, 1061115, 1061116, 1061117, 1072022, 1072028, 1072029, 1072030, 1072031, 1072032, 1072033, 1072035, 1072036, 1072065, 1072066, 1072070, 1072071, 1072084, 1072085, 1072086, 1072087, 1072104, 1072105, 1072106, 1072107, 1072108, 1072109, 1072110, 1072128, 1072129, 1072130, 1072131, 1072150, 1072151, 1072152, 1072161, 1072162, 1072163, 1072171, 1072172, 1072173, 1072174, 1072192, 1072193, 1072194, 1072195, 1072213, 1072214, 1072215, 1072216, 1072272, 1082029, 1082030, 1082031, 1082032, 1082033, 1082034, 1082037, 1082038, 1082039, 1082042, 1082043, 1082044, 1082045, 1082046, 1082047, 1082065, 1082066, 1082067, 1082074, 1082075, 1082076, 1082092, 1082093, 1082094, 1082095, 1082096, 1082097, 1082118, 1082119, 1082120, 1082135, 1082136, 1082137, 1082138, 1082142, 1082143, 1082144, 1082167, 1092018, 1092019, 1092020, 1092047, 1092049, 1092050,
                //爛武器
                1332000, 1332001, 1332002, 1332003, 1332004, 1332005, 1332006, 1332007, 1332008, 1332009, 1332010, 1332011, 1332012, 1332013, 1332014, 1332015, 1332016, 1332017, 1332018, 1332019, 1332020, 1332021, 1332022, 1332023, 1332024, 1332026, 1332027, 1332028, 1332029, 1332030, 1332031, 1332032, 1332049, 1332050, 1332051, 1332052, 1332053, 1332054, 1332057, 1332101, 1342000, 1342001, 1342002, 1342003, 1342004, 1342005, 1342006, 1342007, 1342008, 1342010, 1472000, 1472001, 1472002, 1472003, 1472004, 1472005, 1472006, 1472007, 1472008, 1472009, 1472010, 1472011, 1472012, 1472013, 1472014, 1472015, 1472016, 1472017, 1472018, 1472019, 1472020, 1472021, 1472022, 1472023, 1472024, 1472025, 1472026, 1472027, 1472028, 1472029, 1472031, 1472033, 1472051, 1472052, 1472053, 1472054, 1472056, 1472087
            },
            {
                1002610, 1002613, 1002616, 1002619, 1002622, 1002625, 1002628, 1002631, 1002634, 1002637, 1002640, 1002643, 1002646, 1002649, 1052095, 1052098, 1052101, 1052104, 1052107, 1052110, 1052113, 1052116, 1052119, 1052122, 1052125, 1052128, 1052131, 1052134, 1072285, 1072288, 1072291, 1072294, 1072297, 1072300, 1072303, 1072306, 1072309, 1072312, 1072315, 1072318, 1072321, 1072338, 1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201, 1082204, 1082207, 1082210, 1082213, 1082216, 1082248,
                //爛武器
                1482000, 1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007, 1482008, 1482009, 1482010, 1482011, 1482012, 1482013, 1482030, 1492000, 1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007, 1492008, 1492009, 1492010, 1492011, 1492012, 1492013, 1492034
            }
        };
        int[][] item4 = {
            {
                1004219, 1052789, 1072957, 1082598, 1004224, 1052794, 1072962, 1082603,
                1302315, 1302314, 1312185, 1312184, 1322236, 1322235, 1402236, 1402235, 1412164, 1412163, 1422171, 1422170, 1432200, 1432199, 1442254, 1442253, 1402062, 1442078
            },
            {
                1004220, 1052790, 1072958, 1082599, 1004225, 1052795, 1072963, 1082604,
                1372207, 1372206, 1382245, 1382244
            },
            {
                1004221, 1052791, 1072959, 1082600, 1004226, 1052796, 1072964, 1082605,
                1452238, 1452237, 1462225, 1462224, 1452071
            },
            {
                1004222, 1052792, 1072960, 1082601, 1004227, 1052797, 1072965, 1082606,
                1092049, 1332260, 1332259, 1472247, 1472246
            },
            {
                1004223, 1052793, 1072961, 1082602, 1004228, 1052798, 1072966, 1082607,
                1482202, 1482201, 1492212, 1492211
            }
        };
        int[][] item6 = {
            {
                1402214, 1422156, 1432182,//紅色武器 75
                1442110, 1412061, 1422062, 1432080, 1402089, 1302146, 1312061, 1322089, 1442109, 1412060, 1422061, 1432079, 1402088, 1302145, 1312060, 1322088, 1412059, 1422060, 1432078, 1442108, 1402087, 1322087, 1302144, 1312059, 1442107, 1412058, 1422059, 1432077, 1402086, 1322086, 1302143, 1312058
            },
            {
                1382226,//紅色武器 75
                1382098, 1372077, 1372076, 1382096, 1372075, 1382095, 1372074
            },
            {
                1452220, 1462208,//紅色武器 75
                1462090, 1452105, 1462089, 1452104, 1462088, 1452103, 1462087, 1452102
            },
            {
                1332242, 1342087, 1472230,//紅色武器 75
                1332119, 1332118, 1332117, 1332116, 1342032, 1472116, 1342031, 1472115, 1342029, 1472114, 1472113
            },
            {
                1482183, 1492194,//紅色武器 75
                1482078, 1492078, 1482077, 1492077, 1482076, 1492076, 1482075, 1492075
            }
        };
        //1462038 1332048 1472050 1452043
        /*for (int x = 0; x < item1.length; x++) {
            for (int j = 0; j < item1[x].length; j++) {
                setGachapon(item1[x][j], 800000, ii.getName(item1[x][j]), x * 100 + 100, 1);
            }
        }*/
        final List<Integer> 楓葉 = new ArrayList<>();
        final List<Integer> 正常 = new ArrayList<>();
        final List<Integer> 測試 = new ArrayList<>();
        for (int x = 0; x < item6.length; x++) {
            for (int j : item6[x]) {
                setGachapon(j, 40000, ii.getName(j), x * 100 + 100, 1);
            }
        }
        for (int x = 0; x < item4.length; x++) {
            for (int j : item4[x]) {
                setGachapon(j, 10000, ii.getName(j), x * 100 + 100, 1);
            }
        }
        for (int y = 0; y < item.length; y++) {
            for (int z : item[y]) {
                //if (!楓葉.contains(z) && !測試.contains(z)) {
                正常.add(z);
                setGachapon(z, 800000, ii.getName(z), y * 100 + 100, 1);
                //}
            }
        }

        /*for (int x = 0; x < item2.length; x++) {
            for (int j = 0; j < item2[x].length; j++) {
                setGachapon(item2[x][j], 300000, ii.getName(item2[x][j]), x * 100 + 100, 1);
            }
        }*/
        Gachapon.getInstance().clearDrops();//重載入用
        System.err.println("寫入完畢");
    }

    public static void setGachapon(int itemid, int chance, String comments, int continent, int onlySelf) {
        Connection con = DatabaseConnection.getConnection();
        try (PreparedStatement ps = con.prepareStatement("INSERT INTO gachapon (`itemid`, `chance`, `comments`, `continent`, `onlySelf`) VALUES (?, ?, ?, ?, ?)")) {
            ps.setInt(1, itemid);
            ps.setInt(2, chance);
            ps.setString(3, comments);
            ps.setInt(4, continent);
            ps.setInt(5, onlySelf);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.err.println("ID:" + itemid + " 名稱: " + comments + " - err: " + e);
        }
    }

    public static void delGachapon(int id) {
        Connection con = DatabaseConnection.getConnection();
        try (PreparedStatement ps = con.prepareStatement("DELETE FROM gachapon WHERE itemid = ?")) {
            ps.setInt(1, id);
            ps.executeUpdate();
        } catch (SQLException ex) {
            System.err.println(ex);
        }
    }

    public static final void getGachapon() {
        ret.clear();
        try {
            Connection con = DatabaseConnection.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT * FROM gachapon");
            //ps.setInt(1, monsterId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                ret.add(rs.getInt("itemid"));
            }
        } catch (SQLException e) {
            System.err.println(e);
        }
    }
    public static final List<Integer> ret = new LinkedList<>();
}