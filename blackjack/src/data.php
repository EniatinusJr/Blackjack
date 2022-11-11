<?php
$total = 0;
$Iarray = array();
function recieve_cards(){
    $ch = curl_init('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}
$a = recieve_cards();
$a = json_decode($a, true);
$data["value"] = $a['cards'][0]['value'];
$data["image"] = $a['cards'][0]['image'];
header('Content-Type: application/json');
echo json_encode($data);