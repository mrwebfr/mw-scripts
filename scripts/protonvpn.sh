#!/bin/bash

while [ "$#" -gt 0 ]; do
    case "$1" in
        -d)
            d_flag=1
            ;;
        *)
            args+=("$1")
            ;;
    esac
    shift
done

if [ "$d_flag" = 1 ]; then
    protonvpn-cli ks --off
    protonvpn-cli d
    protonvpn-cli s
    exit 1
fi
# echo "Arguments restants : ${args[@]}"

function proton_connect {
    clear
    protonvpn-cli ks --off
    protonvpn-cli c
    protonvpn-cli s
}
function proton_connect_ks {
    clear
    protonvpn-cli c
    protonvpn-cli ks --permanent
    protonvpn-cli s
}
function proton_connect_fastest {
    clear
    protonvpn-cli c --fastest
    protonvpn-cli ks --permanent
    protonvpn-cli s
}
function proton_disconnect {
    clear
    protonvpn-cli ks --off
    protonvpn-cli d
    protonvpn-cli s
}
function proton_status {
    clear
    protonvpn-cli s
}
function proton_help {
    clear
    protonvpn-cli -h
}
function proton_exit {
    clear
    protonvpn-cli s
}

clear

read -p "
Proton VPN :
----------------------------------
1) Déconnexion 
2) Connexion rapide + Killswitch 
3) Connexion + Killswitch 
4) Connexion
5) Statistiques 
6) Help 
7) Quitter 
----------------------------------
Choix : " choice

case $choice in
    1 ) proton_disconnect;;
    2 ) proton_connect_fastest;;
    3 ) proton_connect_ks;;
    4 ) proton_connect;;
    5 ) proton_status;;
    6 ) proton_help;;
    7 ) proton_exit;;
    * ) echo "Veuillez choisir une option valide.";;
esac

exit 1
