# 課題検証用

* ウィンドウを開く方針について  
  - セキュリティ都合で、新規ウィンドウで開くことが実装では制御不可能
  - 本制約都合、Shift キーを押して開く or 別タブで開いた後に別 Window に移動するよう運用でカバーを打診予定

* 画面のボタンでタブ/ウィンドウを閉じる制御について([参照](https://github.com/visualpaper/work-km-ui-window-public/blob/main/%E8%AA%B2%E9%A1%8C1.md))
  - 原則、JavaScript で開いた画面のみ閉じることが可能だが、詳細な制限の調査が現実的でない
  - 上記より、閉じるのでなく別の画面 (xx 画面であれば xx メニュー画面に遷移とか) に遷移するよう挙動変更可能かを打診したい

* 戻る/進む、リロード、URL 直打ち、閉じる制御について([参照](https://github.com/visualpaper/work-km-ui-window-public/blob/main/%E8%AA%B2%E9%A1%8C2.md))  
  - NextJS (バージョン 14) では戻る/進むに対する制御が公式から提供されていない (トリッキーな方法はなくはないが、安全性の担保/検証に多大な工数がかかる)
  - 上記より、戻る/進む自体の制御はかけず、データの不整合が発生するような画面であれば遷移後に警告メッセージを表示し制限をかけることで対応したい旨を相談予定

<br>

上記それぞれの方針を決めることで、以下の方針になることを目指している。

* ウィンドウは新規ウィンドウでなく、別タブで開く  
  ※ 運用で、別タブで開いた後別ウィンドウに移動したり、Shift を押しながら別ウィンドウで開くことは許可する。

* 状態管理都合で、同じタブで操作しなければいけないケースであれば、同じタブで画面を切り替える  
  ※ これは 1 つの page.tsx でそのページ配下の全画面の State を管理すれば (実装工数や可読性が犠牲になるが) できないことはないため、要望として挙げている状態となる。

* リロード、URL 直打ち、閉じるなど、URL が変化する際に必要であれば警告メッセージを表示する  

* 戻る/進む、リロード、URL 直打ちで本来遷移できるべきでないページに移動した場合、警告メッセージを表示しメニューに戻る  
  ※ 状態を見て、不正かどうかの判断は可能なので、不正であれば戻す

* 閉じるボタンでタブ/ウィンドウを消すのでなく、メニューなどに遷移する  
  ※ メニューでなくとも、業務の開始ページや xxx メニューページなどに飛ばしても OK
