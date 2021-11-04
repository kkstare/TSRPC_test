import { uint } from "tsrpc-proto";
import { QuizQuestion } from "../../../protocols/models/QuizQuestion";

export interface MsgNextQuestion {
    questionIndex: uint,
    totalQuestion: uint,
    question: QuizQuestion,
    /** 答题倒计时（ms） */
    totalTime: uint
}