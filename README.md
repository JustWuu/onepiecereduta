# 航海王劇場版：紅髮歌姬
## [網頁連結](https://justwuu.github.io/onepiecereduta/index.html)
### 此網頁是劇場版中登場角色UTA(美音)的人物頁面
### 使用素材皆為網路取得，非本人持有，且無進行任何商業行為  
<br />  

### 主頁面(index)中，運用基礎切版及RWD
### 右上導覽可快速移動到影片區塊及圖片區塊
### 導覽最下購物車圖示，可連結到購物頁面(index2)
### 購物車頁面以JQuery及JS，完成增減購物車商品及渲染畫面
### 點擊商品圖示會展示商品介紹，點擊加入購物車則會將選擇的數量添加至購物車內
### 其中若要增加新商品則可在html檔案中商品ul內添加如下內容
### 不需要在其他地方為新增的商品額外撰寫編碼
    <!-- 新商品須將comA0000修改成該商品的ID，並在JS頁面增加該商品的編號及調整金額 -->
    <!-- 編號前的com必須保留 -->

    <li class="li-comm">
    <div>
        <a onclick='clickImg("C01")'><img src="images/A0009.jpg" alt=""></a>
        <!-- 上下方需修改編號 -->
        <div class="comm-name"><span class="C01-name">商品名稱</span><p class="C01-money">商品價錢，必須改為數字，否則會出錯</p><p>$</p></div>
        <p style="display: none;" class="C01-info">這裡為商品介紹文字內容預設為隱藏，當點擊商品圖片時會觸發clickImg("商品ID")函式，讀取此區內容並展示</p>
        <!-- 上方需修改編號 -->
        <div class="comm-buy">
        <!-- 下方需修改編號 -->
        <select class="Qua comC01">
        <!-- 上方需修改編號 -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <!-- 下方需修改編號 -->
        <button id="comC01" onclick='buyclick("C01")'>加入購物車</button>
        <!-- 上方需修改編號 -->
        <!-- 點擊加入購物車後觸發buyclick("商品ID")函式，函式所需資料皆從這個li內讀取，會整理成一份物件新增至購物車陣列內，並渲染到頁面的購物車裡 -->
        </div>
    </div>
    </li>
### 選購完成，按下結算時會展示購物車內容及總價，結算畫面的購物車內容是與選購商品頁面的購物車同步的