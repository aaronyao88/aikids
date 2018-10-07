class AnswerWord extends Word{
    public SelectWord:Word = null;

     public constructor() {
        super();

    }

    protected onclick_tap() {
        if(this.SelectWord != null){
            this.SelectWord.visible = true;
            this.SelectWord = null;
            this.setWordText("");
        }
        console.log("AnswerWord");
    }    

    //当一个问题字被选择添加到回答的时，设置不可见，并保存到本对象中以后使用
    public SetSelectWord(word:Word){
        if(word != null){
            this.setWordText(word.getWordText());
            this.SelectWord = word;
            word.visible = false;
        }
        else{
            this.setWordText("");
            this.SelectWord = null;
        }
    }

}

window["AnswerWord"] = AnswerWord;